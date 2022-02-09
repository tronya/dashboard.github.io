import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getUsers } from "../../pages/api/users";
import { User } from "../models/user.model";
import { useAuth } from "./useUser";

interface UseCurrentUserProps {
  user: User | undefined;
  isLocationAllowed: boolean;
}

const useCurrentUser = (): UseCurrentUserProps => {
  const [users, setUsers] = useState<User[]>([]);
  const { user: authUser } = useAuth();

  useEffect(() => {
    getUsers()
      .then((result) => setUsers(result))
      .catch((error) => toast.error(error));
  }, []);

  const currentUser = users.find((user) => user.uid === authUser?.uid);

  const isLocationAllowed = true;
  // const isLocationAllowed =
  // currentUser?.allowLocation ?? false; // TODO

  return { user: currentUser, isLocationAllowed };
};

export default useCurrentUser;
