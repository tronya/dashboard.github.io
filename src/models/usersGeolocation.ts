export interface UserGeolocation {
  coords: {
    accuracy: number;
    altitude: number | null;
    altitudeAccuracy: number | null;
    heading: number | null;
    latitude: number;
    longitude: number;
    speed: number | null;
  };
  timestamp: number;
  displayName: string | undefined | null;
  photoURL: string | undefined | null;
  uid: string;
}
