import { LngLatLike } from "mapbox-gl";
import { GeoJSONObject } from "../models/map";
import { User } from "../models/user.model";

export const returnGeoJSONArray = (users: User[]): GeoJSONObject[] =>
  users.map((user) => ({
    properties: {
      description: user.name,
      iconSize: [40, 40],
      backgroundImage: user.picture,
      gender: user.gender,
    },
    geometry: {
      type: "Point",
      coordinates: [user.latitude, user.longitude] as LngLatLike,
    },
  }));
