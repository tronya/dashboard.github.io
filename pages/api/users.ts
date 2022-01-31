import { collection, getDocs } from "firebase/firestore";
import { DB } from "../../src/firebase";

export const getUsers = async () => {
  return await getDocs(collection(DB, "users"));
};
