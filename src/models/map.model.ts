import { LngLatLike } from 'mapbox-gl';

export interface GeoJSONObject {
  properties: {
    description: string | undefined | null;
    iconSize: number[];
    backgroundImage: string | undefined | null;
    displayName: string | undefined | null;
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
