import { getFirstUppercaseLetters } from '../utils/user';
import { Feature } from 'geojson';
import { GeoJSONObject } from '../models/map.model';
import mapboxgl from 'mapbox-gl';

const createMarkersFromFeatures = (features: Feature[], map: mapboxgl.Map) => {
  for (const marker of features as GeoJSONObject[]) {
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
