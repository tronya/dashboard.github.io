import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { setUserGeolocation } from "../../pages/api/geolocation";
import { useAuth } from "./useUser";

import { child, get, getDatabase, onValue, ref, set } from "firebase/database";
import { RDB } from "../firebase";

export function writeUserData(id: number, data: any) {
  console.log(id, data);

  const dbRef = ref(getDatabase());
  get(child(dbRef, `posts`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
  

 
  set(ref(RDB, `test`), { name: "Hello" });
}

export const useNavigation = (acceptLocation: boolean = false) => {
  const router = useRouter();
  const { t } = useTranslation();

  const [geolocation, setGeolocation] = useState<GeolocationPosition>();

  useEffect(() => {
    if (acceptLocation) {
      navigator.geolocation.getCurrentPosition(
        (success: GeolocationPosition) => {
          setGeolocation(success);
          toast.success(t("toastSuccess.acceptGeolocation"));
          router.push("/");
        },
        (error: GeolocationPositionError) => {
          toast.error(error.message);
        }
      
      );
    }
  }, [acceptLocation, router, t]);

  return geolocation;
};

interface NavigationProviderProps {
  children: JSX.Element[] | JSX.Element;
  acceptLocation: boolean;
}

export const NavigationProvider: FC<NavigationProviderProps> = ({
  acceptLocation,
  children,
}) => {
  const navigator = useNavigation(acceptLocation);
  const auth = useAuth();

  useEffect(() => {
    if (navigator) {
      setUserGeolocation(navigator, auth);
    }
  }, [navigator, auth]);

  return <>{children}</>;
};
