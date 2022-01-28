import { User } from "firebase/auth";
import { createContext, useContext } from "react";

// TODO: need to be replaced in another folder

export const UserContext = createContext<User | null>(null);

export const useUser = () => useContext(UserContext);
