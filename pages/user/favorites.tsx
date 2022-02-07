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
  const [favoritesList, setFavoritesList] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    getGeolocation()
      .then((result) => setGeolocation(result))
      .catch((error) => toast.error(error));
  }, []);

  useEffect(() => {
    getFavorites()
      .then((result) => {
        setFavoritesList(result);
        const favoritesUsers = result.find(
          (favorite: any) => user?.uid === favorite.id
        )?.users;
        setFavorites(favoritesUsers);
      })
      .catch((error) => toast.error(error));
  }, [user]);

  if (!geolocation.length || !user || !favoritesList.length) {
    return <Loader />;
  }

  const handleClick = (location: Geolocation) => {
    if (!favorites.some((alreadyFavorite) => alreadyFavorite === location.id)) {
      const _favorites = [...favorites, location.id];
      setFavorites(_favorites);
      setFavoritesToCollection(user.uid, _favorites);
    } else {
      const _favorites = favorites.filter((id) => location.id !== id);
      setFavorites(_favorites);
      setFavoritesToCollection(user.uid, _favorites);
    }

    geolocation.sort((a, b) => {
      if (b.id === location.id) {
        return 1;
      } else if (a.id === location.id) {
        return -1;
      } else {
        return 0;
      }
    });
  };

  return (
    <Wrapper>
      <Favorites
        geolocation={geolocation.filter((location) => user.uid !== location.id)}
        onUserClick={handleClick}
        favorites={favorites}
      />
    </Wrapper>
  );
};

export default FavoritesPage;
