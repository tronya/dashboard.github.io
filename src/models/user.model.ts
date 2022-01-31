export interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export interface User {
  id: string;
  _id: string;
  index: number;
  guid: string;
  isActive: boolean;
  picture: string;
  age: number;
  name: string;
  gender: "female" | "male";
  company: string;
  email: string;
  phone: string;
  address: string;
  latitude: number;
  longitude: number;
}
