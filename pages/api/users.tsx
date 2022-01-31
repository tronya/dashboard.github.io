import { collection, getDocs } from "firebase/firestore";
import { DB } from "../../src/firebase";
import { User } from "../../src/models/user.model";

export const getUsersCollection = async () =>
  await getDocs(collection(DB, "users"));

export const getUsers = () =>
  getUsersCollection().then((users) => {
    const result: User[] = [];

    users.forEach((user) => {
      const userItem: User = {
        id: user.id,
        ...user.data(),
      } as User;
      result.push(userItem);
    });

    return result;
  });
