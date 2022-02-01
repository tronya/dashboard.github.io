import { User } from "./user.model";

export interface Geolocation {
  id: string;
  user: User;
  coords: {
    altitude: null;
    speed: null;
    altitudeAccuracy: null;
    longitude: number;
    latitude: number;
    heading: null;
    accuracy: number;
  };
}
