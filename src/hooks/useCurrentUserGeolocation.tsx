import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getGeolocation } from "../../pages/api/geolocation";
import { Geolocation } from "../../src/models/geolocation.model";
import { useAuth } from "./useUser";

interface useCurrentUserGeolocationProps {
  user: Geolocation | undefined;
  isLocationAllowed: boolean;
}

const useCurrentUserGeolocation = (): useCurrentUserGeolocationProps => {
  const [geolocation, setGeolocation] = useState<Geolocation[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    getGeolocation()
      .then((result) => setGeolocation(result))
      .catch((error) => toast.error(error));
  }, []);

  const currentUserGeolocation = geolocation.find(
    (location) => location.user.uid === user?.uid
  );

  const isLocationAllowed =
    currentUserGeolocation?.geolocationCoords.allowLocation ?? false;

  return { user: currentUserGeolocation, isLocationAllowed };
};

export default useCurrentUserGeolocation;
