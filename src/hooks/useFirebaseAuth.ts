import { getAuth, User as FirebaseUser } from "firebase/auth";
import { useState, useEffect } from "react";
import { User } from "../models/user.model";

const formatUserModel = (user: User) => ({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
  photoURL: user.photoURL,
});

const useFirebaseAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState: FirebaseUser | null) => {
    if (!authState) {
      setUser(null);
      setLoading(false);
      return null;
    }

    setLoading(true);
    const formattedUser = formatUserModel(authState);
    setUser(formattedUser);
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
  };
};

export default useFirebaseAuth;
