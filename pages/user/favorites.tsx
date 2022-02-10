import { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Favorites from "../../src/components/containers/User/favorites";
import Loader from "../../src/components/ui/Loader/loader";
import Wrapper from "../../src/components/ui/Wrapper/wrapper";
import { useAuth } from "../../src/hooks/useUser";
import { setFavoritesToCollection } from "../api/favorites";
import { query, collection, where, onSnapshot } from "firebase/firestore";
import { DB } from "../../src/firebase";
import { User } from "../../src/models/user.model";
import { getUsers } from "../api/users";

const FavoritesPage: FC = () => {
  const { user: authUser } = useAuth();

  const [users, setUsers] = useState<User[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    getUsers()
      .then((result) => setUsers(result))
      .catch((error) => toast.error(error));
  }, []);

  useEffect(() => {
    if (authUser?.uid) {
      const q = query(
        collection(DB, "favorites"),
        where("id", "==", authUser?.uid)
      );
      onSnapshot(q, (snapshot) => {
        snapshot.forEach((userSnapshot) => {
          setFavorites(userSnapshot.data().users);
        });
      });
    }
  }, [authUser]);

  if (!users.length || !authUser) {
    return <Loader />;
  }

  const setFavoritesUsers = (favorites: string[]) => {
    setFavorites(favorites);
    setFavoritesToCollection(authUser.uid, favorites);
  };

  const handleClick = (user: User) => {
    if (!favorites.some((alreadyFavorite) => alreadyFavorite === user.uid)) {
      const newFavorites = [...favorites, user.uid];
      setFavoritesUsers(newFavorites);
    } else {
      const newFavorites = favorites.filter((id) => user.uid !== id);
      setFavoritesUsers(newFavorites);
    }
  };

  const sortedUsers = users
    .filter((user) => authUser.uid !== user.uid)
    .sort((a, b) =>
      favorites?.includes(b.uid) ? 1 : favorites?.includes(a.uid) ? -1 : 0
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
