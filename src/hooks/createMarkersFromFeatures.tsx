import { getFirstUppercaseLetters } from '../utils/user';
import { Feature } from 'geojson';
import { GeoJSONObject } from '../models/map.model';
import mapboxgl from 'mapbox-gl';

const changeMarkerCenter = (feature: Feature) => {
  console.log(feature);
};

const createMarkersFromFeatures = (
  featuresOnMap: Feature[],
  featuresFromDB: Feature[],
  map: mapboxgl.Map
) => {
  console.log(featuresOnMap, featuresFromDB);

  featuresFromDB.forEach((feature) => {
    const featureAlreadyOnMap = featuresOnMap.find((mapFeature) => {
      if (mapFeature.properties) {
        console.log(mapFeature, feature);
        return mapFeature.properties.uid === feature.id;
      }
      return false;
    });
    if (featureAlreadyOnMap) {
      changeMarkerCenter(featureAlreadyOnMap);
    } else {
      console.log('we cant find feature with tis uid');
    }
  });

  for (const marker of featuresOnMap as GeoJSONObject[]) {
    const el = document.createElement('div');
    const width = marker.properties.iconWidth;
    const height = marker.properties.iconHeight;
    el.style.borderRadius = '50%';
    el.style.backgroundRepeat = 'no-repeat';
    el.style.backgroundImage = !marker.properties.backgroundImage
      ? `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='30px' width='30px'><text x='6' y='20' fill='black' font-size='15'>${getFirstUppercaseLetters(
          marker.properties.displayName
        )}</text></svg>")`
      : `url(${marker.properties.backgroundImage})`;
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    el.style.backgroundSize = '100%';

    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
  }
};

export default createMarkersFromFeatures;
