import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useAuth } from "./useUser";
import { setUserToCollection } from "../../pages/api/users";
import { setUserGeolocationData } from "../../pages/api/usersGeolocation";
import { UserGeolocation } from "../models/usersGeolocation";

export const useNavigation = (isLocationAllowed: boolean = false) => {
  const router = useRouter();
  const auth = useAuth();
  const { t } = useTranslation();

  const [geolocation, setGeolocation] = useState<GeolocationPosition>();

  useEffect(() => {
    if (isLocationAllowed) {
      navigator.geolocation.getCurrentPosition(
        (success: GeolocationPosition) => {
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
            uid: auth.user?.uid,
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
    }
  }, [isLocationAllowed, router, t, auth]);

  return geolocation;
};

interface NavigationProviderProps {
  children: JSX.Element[] | JSX.Element;
  isLocationAllowed: boolean;
}

export const NavigationProvider: FC<NavigationProviderProps> = ({
  isLocationAllowed,
  children,
}) => {
  const navigator = useNavigation(isLocationAllowed);
  const auth = useAuth();

  useEffect(() => {
    if (navigator) {
      setUserToCollection(auth, isLocationAllowed);
    }
  }, [navigator, auth, isLocationAllowed]);

  return <>{children}</>;
};
