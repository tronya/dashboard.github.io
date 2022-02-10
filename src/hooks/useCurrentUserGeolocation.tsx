import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getUsers } from "../../pages/api/users";
import { User } from "../models/user.model";
import { UserGeolocation } from "../models/usersGeolocation";
import { useAuth } from "./useUser";
import useUsersGeolocation from "./useUsersGeolocation";

interface UseCurrentUserGeolocationProps {
  currentUserGeolocation: UserGeolocation | undefined;
  isLocationAllowed: boolean;
}

const useCurrentUserGeolocation = (): UseCurrentUserGeolocationProps => {
  const [users, setUsers] = useState<User[]>([]);

  const { user: authUser } = useAuth();
  const usersGeolocation = useUsersGeolocation();

  useEffect(() => {
    getUsers()
      .then((result) => setUsers(result))
      .catch((error) => toast.error(error));
  }, []);

  const isLocationAllowed =
    users?.find((user) => user.uid === authUser?.uid)?.isLocationAllowed ??
    false;

  const currentUserGeolocation = usersGeolocation.find(
    (user) => user.uid === authUser?.uid
  );

  return { currentUserGeolocation, isLocationAllowed };
};

export default useCurrentUserGeolocation;
