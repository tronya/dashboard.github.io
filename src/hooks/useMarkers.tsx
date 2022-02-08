import { Geolocation } from "../models/geolocation.model";
import { Marker } from "../models/map.model";
import { returnGeoJSONArray } from "../utils/map";
import { getFirstUppercaseLetters } from "../utils/user";

const useMarkers = (
  favoritesUsers: Geolocation[],
  currentUser: Geolocation | undefined
): Marker[] => {
  const markers: Marker[] = [];

  if (currentUser) {
    const geoJSONArray = returnGeoJSONArray([currentUser, ...favoritesUsers]);

    geoJSONArray.forEach((marker) => {
      const el = document.createElement("div");
      const width = marker.properties.iconSize[0];
      const height = marker.properties.iconSize[1];
      el.style.borderRadius = "50%";
      el.style.backgroundRepeat = "no-repeat";
      el.style.backgroundImage = !marker.properties.backgroundImage
        ? `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='30px' width='30px'><text x='6' y='20' fill='black' font-size='15'>${getFirstUppercaseLetters(
            marker.properties.displayName
          )}</text></svg>")`
        : `url(${marker.properties.backgroundImage})`;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      el.style.backgroundSize = "100%";

      markers.push({ popup: el, marker });
    });
  }

  return markers;
};

export default useMarkers;
