import { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { setUserGeolocation } from "../../pages/api/geolocation";
import { useAuth } from "./useUser";

export const useNavigation = () => {
  const [geolocation, setGeolocation] = useState<GeolocationPosition>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (success: GeolocationPosition) => {
        setGeolocation(success);
      },
      (error: GeolocationPositionError) => {
        toast.warning(error.message);
      }
    );
  }, []);

  return geolocation;
};

interface NavigationProviderProps {
  children: JSX.Element[] | JSX.Element;
}

export const NavigationProvider: FC<NavigationProviderProps> = ({
  children,
}) => {
  const navigator = useNavigation();
  const auth = useAuth();
  useEffect(() => {
    if (navigator) {
      setUserGeolocation(navigator, auth);
    }
  }, [navigator, auth]);
  return <>{children}</>;
};
