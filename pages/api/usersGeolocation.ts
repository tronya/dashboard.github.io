import { set, ref } from "firebase/database";
import { RTDB } from "../../src/firebase";
import { UserGeolocation } from "../../src/models/usersGeolocation";
import { DataBaseModel } from "./api.model";

export const setUserGeolocationData = (
  id: string | undefined,
  data: UserGeolocation
) => set(ref(RTDB, `${DataBaseModel.USERS_GEOLOCATION}/${id}`), data);
