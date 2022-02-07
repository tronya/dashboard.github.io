import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { DB } from "../../src/firebase";
import { Favorite } from "../../src/models/favorites.model";

export const getFavoritesCollection = async () =>
  await getDocs(collection(DB, "favorites"));

export const getFavorites = () =>
  getFavoritesCollection().then((favorites) => {
    const result: Favorite[] = [];

    favorites.forEach((item) => {
      const favorite: Favorite = {
        id: item.id,
        ...item.data(),
      } as Favorite;
      result.push(favorite);
    });

    return result;
  });

export const setFavoritesToCollection = async (id: string, users: string[]) =>
  await setDoc(doc(DB, "favorites", id), {
    users,
    id,
  });
