export interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export interface User {
  email: string | null;
  photoURL: string;
  uid: string;
  displayName: string;
}
