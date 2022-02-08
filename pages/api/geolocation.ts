import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { DB } from "../../src/firebase";
import { AuthUserContextProps } from "../../src/models/auth.model";
import {
  Geolocation,
  GeolocationCoords,
  UsersGeolocationProps,
} from "../../src/models/geolocation.model";
import { User } from "../../src/models/user.model";

export const getGeolocationCollection = async () =>
  await getDocs(collection(DB, "geolocation"));

export const getGeolocation = async () =>
  await getGeolocationCollection().then((geolocation) => {
    const result: UsersGeolocationProps[] = [];

    geolocation.forEach((location) => {
      const geolocation: UsersGeolocationProps = {
        id: location.id,
        ...location.data(),
      } as UsersGeolocationProps;
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

  const geolocationCoords: GeolocationCoords = {
    coords: {
      accuracy: navigator.coords.accuracy,
      altitude: navigator.coords.altitude,
      altitudeAccuracy: navigator.coords.altitudeAccuracy,
      heading: navigator.coords.heading,
      latitude: navigator.coords.latitude,
      longitude: navigator.coords.longitude,
      speed: navigator.coords.speed,
    },
    timestamp: navigator.timestamp,
    allowLocation: true,
  };

  return await setDoc(
    doc(DB, "geolocation", auth.user.uid),
    {
      geolocationCoords,
      user: auth.user,
    },
    { merge: true }
  );
};
