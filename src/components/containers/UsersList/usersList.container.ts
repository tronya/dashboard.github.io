import { createElement, FC, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { DB } from "../../../firebase-config";
import { UsersList } from "./usersList.component";

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
        const usersModified = users.forEach((user) => {
          const userItem: UserProps = {
            id: user.id,
            ...user.data(),
          } as UserProps;
          result.push(userItem);
        });
        setUsers(result);
      })
      .catch((e) => console.log(e, "Something wrong happend"));
  }, []);

  return createElement(UsersList, {
    users,
  });
};

export default UsersListContainer;
