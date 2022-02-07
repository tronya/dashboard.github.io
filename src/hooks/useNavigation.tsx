import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { setUserGeolocation } from "../../pages/api/geolocation";
import { useAuth } from "./useUser";

export const useNavigation = (acceptLocation?: boolean) => {
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
