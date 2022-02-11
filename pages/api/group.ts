import { getDocs, collection, addDoc } from "firebase/firestore";
import { DB } from "../../src/firebase";
import { AuthUserContextProps } from "../../src/models/auth.model";
import { GroupProps } from "../../src/models/groups.model";
import { GroupFormFields } from "../groups/create";
import { DataBaseModel } from "./api.model";

export const getGroupsCollection = async () =>
  await getDocs(collection(DB, DataBaseModel.GROUPS));

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

  return await addDoc(collection(DB, DataBaseModel.GROUPS), {
    ...groupFields,
    userCreate: auth.user.uid,
  });
};
