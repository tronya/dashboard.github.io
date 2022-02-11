import { useRouter } from "next/router";
import { createContext, FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useAuth } from "./useAuth";
import { setUserGeolocationData } from "../../pages/api/usersGeolocation";
import { UserGeolocation } from "../models/usersGeolocation";

export const useNavigation = (isLocationAllowed: boolean = false) => {
  const router = useRouter();
  const auth = useAuth();
  const { t } = useTranslation();

  const [geolocation, setGeolocation] = useState<GeolocationPosition>();

  useEffect(() => {
      const watcher = navigator.geolocation.watchPosition(
        (success: GeolocationPosition) => {
            console.log(success)
          const data: UserGeolocation = {
            coords: {
              accuracy: success.coords.accuracy,
              altitude: success.coords.altitude,
              altitudeAccuracy: success.coords.altitudeAccuracy,
              heading: success.coords.heading,
              latitude: success.coords.latitude,
              longitude: success.coords.longitude,
              speed: success.coords.speed,
            },
            timestamp: success.timestamp,
            displayName: auth.user?.displayName,
            photoURL: auth.user?.photoURL,
            uid: auth.user?.uid ?? "",
          };
          setGeolocation(success);
          setUserGeolocationData(auth.user?.uid, data);

          toast.success(t("toastSuccess.acceptGeolocation"));
          router.push("/");
        },
        (error: GeolocationPositionError) => {
          toast.error(error.message);
        }
      );

    return () => navigator.geolocation.clearWatch(watcher)
  }, [isLocationAllowed, router, t, auth]);

  return geolocation;
};
