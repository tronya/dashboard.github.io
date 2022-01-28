import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";

const formatUserModel = (user: any) => ({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
  photoURL: user.photoURL,
});

export default function useFirebaseAuth() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState: any) => {
    if (!authState) {
      setUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    var formattedUser = formatUserModel(authState);
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
}
