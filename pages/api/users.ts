import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { DB } from "../../src/firebase";
import { AuthUserContextProps } from "../../src/models/auth.model";
import { User } from "../../src/models/user.model";

const getUsersCollection = async () => await getDocs(collection(DB, "users"));

export const getUsers = async () =>
  await getUsersCollection().then((result) => {
    const users: User[] = [];

    result.forEach((doc) => {
      const user: User = {
        uid: doc.id,
        ...doc.data(),
      } as User;
      users.push(user);
    });

    return users;
  });

export const setUserToCollection = async (auth: AuthUserContextProps) => {
  if (!auth.user?.uid) {
    return null;
  }

  return await setDoc(doc(DB, "users", auth.user.uid), auth.user, {
    merge: true,
  });
};
