import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DB } from "../../src/firebase";
import { User } from "../../src/models/user.model";

export const getUsersCollection = async () =>
  await getDocs(collection(DB, "users"));

export const useGetUsers = (): User[] => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsersCollection()
      .then((users) => {
        const result: User[] = [];
        users.forEach((user) => {
          const userItem: User = {
            id: user.id,
            ...user.data(),
          } as User;
          result.push(userItem);
        });
        setUsers(result);
      })
      .catch((error) => toast.error(error));
  }, []);

  return users;
};
