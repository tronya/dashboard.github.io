import mapboxgl from 'mapbox-gl';
import { Feature, FeatureCollection } from 'geojson';
import createMarkersFromFeatures from '../../../hooks/createMarkersFromFeatures';

const getFeaturesCollection = (map: mapboxgl.Map): Feature[] => {
  return map.querySourceFeatures('users', {
    sourceLayer: 'markers',
  });
};

export const setFeatureStyles = (
  map: mapboxgl.Map,
  featuresFromDB: Feature[]
) => {
  createMarkersFromFeatures(getFeaturesCollection(map), featuresFromDB, map);
};

export const createFeatureCollection = (
  features: Feature[]
): FeatureCollection => {
  return {
    type: 'FeatureCollection',
    features: features as Feature[],
  };
};
