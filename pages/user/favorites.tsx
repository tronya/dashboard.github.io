import { FC, useEffect, useState } from 'react';
import Favorites from '../../src/components/containers/User/favorites';
import Loader from '../../src/components/ui/Loader/loader';
import Wrapper from '../../src/components/ui/Wrapper/wrapper';
import { useAuth } from '../../src/hooks/useAuth';
import { setFavoritesToCollection } from '../api/favorites';
import { query, collection, where, onSnapshot } from 'firebase/firestore';
import { DB } from '../../src/firebase';
import useUsersGeolocation from '../../src/hooks/useUsersGeolocation';
import { UserGeolocation } from '../../src/models/usersGeolocation';

const FavoritesPage: FC = () => {
  const { user: authUser } = useAuth();
  const usersGeolocation = useUsersGeolocation();

  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    if (authUser?.uid) {
      const q = query(
        collection(DB, 'favorites'),
        where('id', '==', authUser?.uid)
      );
      onSnapshot(q, (snapshot) => {
        snapshot.forEach((userSnapshot) => {
          setFavorites(userSnapshot.data().users);
        });
      });
    }
  }, [authUser]);

  if (!usersGeolocation || !authUser) {
    return <Loader />;
  }

  const setFavoritesUsers = (favorites: string[]) => {
    setFavorites(favorites);
    setFavoritesToCollection(authUser.uid, favorites);
  };

  const handleClick = (user: UserGeolocation) => {
    if (
      !favorites.some((alreadyFavorite) => alreadyFavorite === user.uid) &&
      user.uid
    ) {
      const newFavorites = [...favorites, user.uid];
      setFavoritesUsers(newFavorites);
    } else {
      const newFavorites = favorites.filter((id) => user.uid !== id);
      setFavoritesUsers(newFavorites);
    }
  };

  const sortedUsers = usersGeolocation
    .filter((user) => authUser.uid !== user.uid)
    .sort((a, b) =>
      favorites?.includes(b.uid!!) ? 1 : favorites?.includes(a.uid!!) ? -1 : 0
    );

  return (
    <Wrapper>
      <Favorites
        users={sortedUsers}
        onUserClick={handleClick}
        favorites={favorites}
      />
    </Wrapper>
  );
};

export default FavoritesPage;
