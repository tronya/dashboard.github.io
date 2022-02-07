import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { DB } from "../../src/firebase";

export const getFavoritesCollection = async () =>
  await getDocs(collection(DB, "favorites"));

export const getFavorites = () =>
  getFavoritesCollection().then((favorites) => {
    const result: any = [];

    favorites.forEach((item) => {
      const favorite: any = {
        id: item.id,
        ...item.data(),
      } as any;
      result.push(favorite);
    });

    return result;
  });

export const setFavoritesToCollection = async (id: string, users: string[]) =>
  await setDoc(doc(DB, "favorites", id), {
    users,
    id,
  });
