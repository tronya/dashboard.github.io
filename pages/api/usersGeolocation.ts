import { ref, set } from 'firebase/database';
import { RTDB } from '../../src/firebase';
import { UserGeolocation } from '../../src/models/usersGeolocation';
import { DataBaseModel } from './api.model';
import { User } from '../../src/models/user.model';

export const prepareUserData = (
  data: GeolocationPosition,
  authUser: User
): UserGeolocation => {
  return {
    coords: {
      accuracy: data.coords.accuracy,
      altitude: data.coords.altitude,
      altitudeAccuracy: data.coords.altitudeAccuracy,
      heading: data.coords.heading,
      latitude: data.coords.latitude,
      longitude: data.coords.longitude,
      speed: data.coords.speed,
    },
    timestamp: data.timestamp,
    displayName: authUser.displayName,
    photoURL: authUser.photoURL,
    uid: authUser.uid ?? '',
  };
};

export const setUserGeolocationData = (
  id: string | undefined,
  data: UserGeolocation
) => set(ref(RTDB, `${DataBaseModel.USERS_GEOLOCATION}/${id}`), data);
