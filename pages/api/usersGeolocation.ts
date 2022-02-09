import { set, ref, onValue } from "firebase/database";
import { RTDB } from "../../src/firebase";
import { UserGeolocation } from "../../src/models/usersGeolocation";

export const setUserGeolocationData = (
  id: string | undefined,
  data: UserGeolocation
) => set(ref(RTDB, `usersGeolocation/${id}`), data);
