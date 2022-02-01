import { ReactNode } from "react";
import { AuthUser } from "./user.model";

export interface AuthUserProviderProps {
  children: ReactNode;
}

export interface AuthUserContextProps {
  user: AuthUser | null;
  loading: boolean;
}
