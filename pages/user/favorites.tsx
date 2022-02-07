import { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Favorites from "../../src/components/containers/User/favorites";
import Loader from "../../src/components/ui/Loader/loader";
import Wrapper from "../../src/components/ui/Wrapper/wrapper";
import { getGeolocation } from "../api/geolocation";
import { Geolocation } from "../../src/models/geolocation.model";
import { useAuth } from "../../src/hooks/useUser";
import { getFavorites, setFavoritesToCollection } from "../api/favorites";

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
    getFavorites()
      .then((result) => {
        const favoritesUsers = result.find(
          (favorite) => user?.uid === favorite.id
        )?.users;
        if (favoritesUsers) {
          setFavorites(favoritesUsers);
        }
      })
      .catch((error) => toast.error(error));
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
