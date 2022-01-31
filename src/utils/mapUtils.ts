import { LngLatLike } from "mapbox-gl";
import { User } from "../models/user.model";

export const returnArrayOfGeoJSON = (users: User[]) =>
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
