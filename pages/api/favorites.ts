import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { DB } from '../../src/firebase';
import { Favorite } from '../../src/models/favorites.model';
import { DataBaseModel } from './api.model';

export const getFavoritesCollection = async () =>
  await getDocs(collection(DB, DataBaseModel.FAVORITES));

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
  await setDoc(doc(DB, DataBaseModel.FAVORITES, id), {
    users,
    id,
  });
