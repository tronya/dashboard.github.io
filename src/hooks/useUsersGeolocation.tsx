import { onValue, ref } from "firebase/database";
import { useState, useEffect } from "react";
import { RTDB } from "../firebase";
import { UserGeolocation } from "../models/usersGeolocation";

const useUsersGeolocation = () => {
  const [usersGeolocation, setUsersGeolocation] = useState<UserGeolocation[]>(
    []
  );

  useEffect(() => {
    onValue(ref(RTDB, "usersGeolocation"), (snapshot) => {
      const result = Object.entries(snapshot.val())?.map(([_, value]) => ({
        ...(value as UserGeolocation),
      }));
      setUsersGeolocation(result);
    });
  }, []);

  return usersGeolocation;
};

export default useUsersGeolocation;
