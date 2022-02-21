import mapboxgl from 'mapbox-gl';
import { Feature, FeatureCollection } from 'geojson';
import createMarkersFromFeatures from '../../../hooks/createMarkersFromFeatures';

const featuresOnSource = (map: mapboxgl.Map): Feature[] => {
  return map.querySourceFeatures('users', {
    sourceLayer: 'markers',
  });
};

export const setFeatureStyles = (map: mapboxgl.Map) => {
  setTimeout(() => {
    createMarkersFromFeatures(featuresOnSource(map), map);
  }, 4000);
};

export const createFeatureCollection = (
  features: Feature[]
): FeatureCollection => {
  return {
    type: 'FeatureCollection',
    features: features as Feature[],
  };
};
