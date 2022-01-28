import { createContext, useContext, Context } from 'react'
import useFirebaseAuth from './useFirebaseAuth';

const AuthUserContext = createContext({
  user: null,
  loading: true
});

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();
  return <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>;
}

export const useAuth = () => useContext(AuthUserContext);