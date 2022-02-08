import { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Favorites from "../../src/components/containers/User/favorites";
import Loader from "../../src/components/ui/Loader/loader";
import Wrapper from "../../src/components/ui/Wrapper/wrapper";
import { getGeolocation } from "../api/geolocation";
import { Geolocation } from "../../src/models/geolocation.model";
import { useAuth } from "../../src/hooks/useUser";
import { setFavoritesToCollection } from "../api/favorites";
import { query, collection, where, onSnapshot } from "firebase/firestore";
import { DB } from "../../src/firebase";

const FavoritesPage: FC = () => {
  const { user } = useAuth();

  const [geolocation, setGeolocation] = useState<Geolocation[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    getGeolocation()
      .then((result) => setGeolocation(result))
      .catch((error) => toast.error(error));
  }, []);

  useEffect(() => {
    if (user?.uid) {
      const q = query(
        collection(DB, "favorites"),
        where("id", "==", user?.uid)
      );
      onSnapshot(q, (snapshot) => {
        snapshot.forEach((userSnapshot) => {
          setFavorites(userSnapshot.data().users);
        });
      });
    }
  }, [user]);

  if (!geolocation.length || !user) {
    return <Loader />;
  }

  const setFavoritesUsers = (favorites: string[]) => {
    setFavorites(favorites);
    setFavoritesToCollection(user.uid, favorites);
  };

  const handleClick = (location: Geolocation) => {
    if (!favorites.some((alreadyFavorite) => alreadyFavorite === location.id)) {
      const newFavorites = [...favorites, location.id];
      setFavoritesUsers(newFavorites);
    } else {
      const newFavorites = favorites.filter((id) => location.id !== id);
      setFavoritesUsers(newFavorites);
    }
  };

  const sortedGeolocation = geolocation
    .filter((location) => user.uid !== location.id)
    .sort((a, b) =>
      favorites?.includes(b.id) ? 1 : favorites?.includes(a.id) ? -1 : 0
    );

  return (
    <Wrapper>
      <Favorites
        geolocation={sortedGeolocation}
        onUserClick={handleClick}
        favorites={favorites}
      />
    </Wrapper>
  );
};

export default FavoritesPage;
