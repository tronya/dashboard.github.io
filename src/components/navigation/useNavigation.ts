import { useEffect, useState } from "react";

export const useNavigation = () => {
  const [geolocation, setGeolocation] = useState<GeolocationPosition>();

  useEffect(() => {
     navigator.geolocation.getCurrentPosition(
        (success: GeolocationPosition) => {
            setGeolocation(success);
        },
        (error: GeolocationPositionError) => {
            console.log(error)
            //toast.warning(error.message);
        }
    );
  },[]);

  return geolocation;
};
