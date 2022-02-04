import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getGeolocation } from "../../pages/api/geolocation";
import { Geolocation } from "../../src/models/geolocation.model";
import { useAuth } from "./useUser";

const useCurrentUserGeolocation = (): Geolocation | undefined => {
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

  return currentUserGeolocation;
};

export default useCurrentUserGeolocation;
