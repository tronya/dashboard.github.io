import { LngLatLike } from 'mapbox-gl';

export interface GeoJSONObject {
  type: 'Feature';
  id: string;
  properties: {
    uid: string;
    description: string | undefined | null;
    iconWidth: number;
    iconHeight: number;
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
