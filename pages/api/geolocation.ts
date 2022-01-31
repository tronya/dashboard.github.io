import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { DB } from "../../src/firebase";
import { AuthUserContextProps } from "../../src/models/auth.model";
import { User } from "../../src/models/user.model";

export const getGolocations = async () => {
  return await getDocs(collection(DB, "geolocations"));
};

export const setUserGeolocation = async (
  navigator: GeolocationPosition,
  auth: AuthUserContextProps
) => {
  if (!auth.user?.uid) {
    console.log("User is not defined to update");
    return;
  }
  const navigatorMeergeed: GeolocationCoordinates = {
    accuracy: navigator.coords.accuracy,
    altitude: navigator.coords.altitude,
    altitudeAccuracy: navigator.coords.altitudeAccuracy,
    heading: navigator.coords.heading,
    latitude: navigator.coords.latitude,
    longitude: navigator.coords.longitude,
    speed: navigator.coords.speed,
  };
  return await setDoc(doc(DB, "geolocation", auth.user.uid), {
    coords: navigatorMeergeed,
    user: auth.user,
  });
};
