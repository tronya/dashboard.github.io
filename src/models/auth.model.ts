import { ReactNode } from "react";
import { User } from "./user.model";

export interface AuthUserProviderProps {
  children: ReactNode;
}

export interface AuthUserContextProps {
  user: User | null;
  loading: boolean;
}
