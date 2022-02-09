export interface User {
  email: string;
  photoURL: string;
  uid: string;
  displayName: string;
  isLocationAllowed?: boolean;
}

export interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}
