import { createElement, FC, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import { UsersList } from "./usersList.component";
import { DB } from "../../../../firebase";

export interface UserProps {
  id: string;
  _id: string;
  index: number;
  guid: string;
  isActive: boolean;
  picture: string;
  age: number;
  name: string;
  gender: "female" | "male";
  company: string;
  email: string;
  phone: string;
  address: string;
  latitude: number;
  longitude: number;
}

const getUsers = async () => {
  return await getDocs(collection(DB, "users"));
};

const UsersListContainer: FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    getUsers()
      .then((users) => {
        const result: UserProps[] = [];
        users.forEach((user) => {
          const userItem: UserProps = {
            id: user.id,
            ...user.data(),
          } as UserProps;
          result.push(userItem);
        });
        setUsers(result);
      })
      .catch((error) => toast.error(error));
  }, []);

  return createElement(UsersList, {
    users,
  });
};

export default UsersListContainer;
