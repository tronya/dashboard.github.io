import mapboxgl from "mapbox-gl";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getGeolocation } from "../../pages/api/geolocation";
import { Geolocation } from "../models/geolocation.model";
import { Marker } from "../models/map.model";
import { returnGeoJSONArray } from "../utils/map";
import { getFirstUppercaseLetters } from "../utils/user";

const useMarkers = (map: mapboxgl.Map | undefined): Marker[] => {
  const [geolocation, setGeolocation] = useState<Geolocation[]>([]);
  const markers: Marker[] = [];

  useEffect(() => {
    getGeolocation()
      .then((result) => setGeolocation(result))
      .catch((error) => toast.error(error));
  }, []);

  const geoJSONArray = returnGeoJSONArray(geolocation);

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
    el.style.boxShadow = "2px 2px 8px rgba(0, 0, 0, 0.5)";

    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    });

    el.addEventListener("mouseenter", () => {
      if (map) {
        el.style.cursor = "pointer";
        popup
          .setLngLat(marker.geometry.coordinates)
          .setHTML(marker.properties.description)
          .addTo(map);
      }
    });

    el.addEventListener("mouseleave", () => {
      el.style.cursor = "";
      popup.remove();
    });

    markers.push({ popup: el, marker });
  });

  return markers;
};

export default useMarkers;
