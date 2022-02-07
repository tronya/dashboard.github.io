import { getDocs, collection, doc, setDoc, addDoc } from "firebase/firestore";
import { DB } from "../../src/firebase";
import { AuthUserContextProps } from "../../src/models/auth.model";
import { AuthUser } from "../../src/models/user.model";
import { GroupFormFields } from "../groups/create";

export interface GroupProps {
  id: string;
  name: string;
  users: string[];
  userCreate: string;
}

export const getGroupsCollection = async () =>
  await getDocs(collection(DB, "groups"));

export const getGroups = async () =>
  await getGroupsCollection().then((groups) => {
    const result: GroupProps[] = [];

    groups.forEach((group) => {
      const newGroup: GroupProps = {
        id: group.id,
        ...group.data(),
      } as GroupProps;
      result.push(newGroup);
    });

    return result;
  });

export const setGroup = async (
  groupFields: GroupFormFields,
  auth: AuthUserContextProps
) => {
  if (!auth.user?.uid) {
    return null;
  }

  return await addDoc(collection(DB, "groups"), {
    ...groupFields,
    userCreate: auth.user.uid,
  });
};
