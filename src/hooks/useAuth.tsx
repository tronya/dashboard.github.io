import { createContext, useContext } from 'react';
import { AuthUser, AuthUserProviderProps } from '../models/auth.model';
import useFirebaseAuth from './useFirebaseAuth';
import Loader from '../components/ui/Loader/loader';

const AuthUserContext = createContext<AuthUser>({
  user: null,
  loading: true,
});

export const AuthUserProvider = ({ children }: AuthUserProviderProps) => {
  const auth = useFirebaseAuth();
  if (auth.loading) {
    return <Loader />;
  }
  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
};

export const useAuth = () => useContext(AuthUserContext);
