import mapboxgl from "mapbox-gl";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getUsers } from "../../pages/api/users";
import { Marker } from "../models/map";
import { User } from "../models/user.model";
import { returnGeoJSONArray } from "../utils/mapUtils";

const useMarkers = (map: mapboxgl.Map | undefined): Marker[] => {
  const [users, setUsers] = useState<User[]>([]);
  const markers: Marker[] = [];

  useEffect(() => {
    getUsers()
      .then((result) => setUsers(result))
      .catch((error) => toast.error(error));
  }, []);

  const geoJSONArray = returnGeoJSONArray(users);

  geoJSONArray.forEach((marker) => {
    const el = document.createElement("div");
    const width = marker.properties.iconSize[0];
    const height = marker.properties.iconSize[1];
    el.style.borderRadius = "50%";
    el.style.backgroundImage = `url(${marker.properties.backgroundImage})`;
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
        popup
          .setLngLat(marker.geometry.coordinates)
          .setHTML(marker.properties.description)
          .addTo(map);
      }
    });

    el.addEventListener("mouseleave", () => {
      popup.remove();
    });

    markers.push({ popup: el, marker });
  });

  return markers;
};

export default useMarkers;
