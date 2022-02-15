import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { DB } from '../../src/firebase';
import { AuthUser } from '../../src/models/auth.model';
import { User } from '../../src/models/user.model';
import { DataBaseModel } from './api.model';

const getUsersCollection = async () =>
  await getDocs(collection(DB, DataBaseModel.USERS));

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

export const setUserToCollection = async (
  auth: AuthUser,
  isLocationAllowed: boolean
) => {
  if (!auth.user?.uid) {
    return null;
  }

  return await setDoc(
    doc(DB, DataBaseModel.USERS, auth.user.uid),
    { ...auth.user, isLocationAllowed },
    {
      merge: true,
    }
  );
};
