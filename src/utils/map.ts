import mapboxgl from "mapbox-gl";
import { GeoJSONObject, Marker } from "../models/map.model";
import { Geolocation } from "../models/geolocation.model";

export const returnGeoJSONArray = (
  geolocation: Geolocation[]
): GeoJSONObject[] =>
  geolocation.map((location) => ({
    properties: {
      description: location.user.displayName,
      iconSize: [40, 40],
      backgroundImage: location.user.photoURL,
      displayName: location.user.displayName,
    },
    geometry: {
      type: "Point",
      coordinates: [
        location.geolocationCoords.coords.longitude,
        location.geolocationCoords.coords.latitude,
      ],
    },
  }));

export const createMarkersOnMap = (marker: Marker, map: mapboxgl.Map) => {
  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
  });

  marker.popup.addEventListener("mouseenter", () => {
    marker.popup.style.cursor = "pointer";
    popup
      .setLngLat(marker.marker.geometry.coordinates)
      .setHTML(marker.marker.properties.description)
      .addTo(map);
  });

  marker.popup.addEventListener("mouseleave", () => {
    marker.popup.style.cursor = "";
    popup.remove();
  });

  new mapboxgl.Marker(marker.popup)
    .setLngLat(marker.marker.geometry.coordinates)
    .addTo(map);
};
