import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { DB } from "../../src/firebase";
import { AuthUserContextProps } from "../../src/models/auth.model";
import { Geolocation } from "../../src/models/geolocation.model";

export const getGeolocationCollection = async () =>
  await getDocs(collection(DB, "geolocation"));

export const getGeolocation = () =>
  getGeolocationCollection().then((geolocation) => {
    const result: Geolocation[] = [];

    geolocation.forEach((location) => {
      const geolocation: Geolocation = {
        id: location.id,
        ...location.data(),
      } as Geolocation;
      result.push(geolocation);
    });

    return result;
  });

export const setUserGeolocation = async (
  navigator: GeolocationPosition,
  auth: AuthUserContextProps
) => {
  if (!auth.user?.uid) {
    return null;
  }

  const geolocationCoords: GeolocationCoordinates = {
    accuracy: navigator.coords.accuracy,
    altitude: navigator.coords.altitude,
    altitudeAccuracy: navigator.coords.altitudeAccuracy,
    heading: navigator.coords.heading,
    latitude: navigator.coords.latitude,
    longitude: navigator.coords.longitude,
    speed: navigator.coords.speed,
  };
  return await setDoc(doc(DB, "geolocation", auth.user.uid), {
    coords: geolocationCoords,
    user: auth.user,
  });
};
