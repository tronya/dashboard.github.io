import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { DB } from '../../src/firebase';
import { AuthUserContextProps } from '../../src/models/auth.model';
import { Group } from '../../src/models/groups.model';
import { GroupFormFields } from '../groups/create';
import { DataBaseModel } from './api.model';

export const getGroupsCollection = async (uid: string | undefined) => {
  const coll = collection(DB, DataBaseModel.GROUPS);
  if (uid) {
    return await getDocs(query(coll, where('users', 'array-contains', uid)));
  } else {
    return await getDocs(query(coll));
  }
};

export const getGroups = async (uid: string | undefined) => {
  const groups = await getGroupsCollection(uid);
  const result: Group[] = [];

  groups.forEach((group) => {
    const newGroup: Group = {
      id: group.id,
      ...group.data(),
    } as Group;
    result.push(newGroup);
  });

  return result;
};

export const setGroup = async (
  groupFields: GroupFormFields,
  auth: AuthUserContextProps
) => {
  if (!auth.user?.uid) {
    return null;
  }

  return await addDoc(collection(DB, DataBaseModel.GROUPS), {
    ...groupFields,
    userCreate: auth.user.uid,
  });
};
