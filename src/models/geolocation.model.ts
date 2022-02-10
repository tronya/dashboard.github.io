import { User } from "./user.model";

export interface Geolocation {
  id: string;
  user: User;
  geolocationCoords: GeolocationCoords;
}

export type GeolocationCoords = GeolocationPosition & {
  allowLocation: boolean;
};