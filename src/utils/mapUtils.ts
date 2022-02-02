import { LngLatLike } from "mapbox-gl";
import { GeoJSONObject } from "../models/map.model";
import { Geolocation } from "../models/geolocation.model";

export const returnGeoJSONArray = (
  geolocation: Geolocation[]
): GeoJSONObject[] =>
  geolocation.map((location) => ({
    properties: {
      description: location.user.displayName,
      iconSize: [40, 40],
      backgroundImage: location.user.photoURL,
    },
    geometry: {
      type: "Point",
      coordinates: [
        location.geolocationCoords.coords.longitude,
        location.geolocationCoords.coords.latitude,
      ],
    },
  }));
