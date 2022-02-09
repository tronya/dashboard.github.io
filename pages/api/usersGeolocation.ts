import { set, ref, onValue } from "firebase/database";
import { RTDB } from "../../src/firebase";
import { UserGeolocation } from "../../src/models/usersGeolocation";

export const setUserGeolocationData = (
  id: string | undefined,
  data: UserGeolocation
) => set(ref(RTDB, `usersGeolocation/${id}`), data);

export const getUserGeolocationDataById = (id: string) =>
  onValue(ref(RTDB, `usersGeolocation/${id}`), (snapshot) => {
    const data = snapshot.val();
    return data;
  });
