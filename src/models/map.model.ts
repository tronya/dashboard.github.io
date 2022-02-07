import { LngLatLike } from "mapbox-gl";

export interface GeoJSONObject {
  properties: {
    description: string;
    iconSize: number[];
    backgroundImage: string;
    displayName: string;
  };
  geometry: {
    type: string;
    coordinates: LngLatLike;
  };
}

export interface Marker {
  popup: HTMLDivElement;
  marker: GeoJSONObject;
}
