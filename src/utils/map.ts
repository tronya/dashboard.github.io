import mapboxgl from 'mapbox-gl';
import { Marker } from '../models/map.model';
import { UserGeolocation } from '../models/usersGeolocation';
import { Feature } from 'geojson';

export const createFeatures = (users: UserGeolocation[]): Feature[] =>
  users.map((user) => ({
    type: 'Feature',
    id: user.uid,
    properties: {
      description: user.displayName,
      iconWidth: 40,
      iconHeight: 40,
      backgroundImage: user.photoURL,
      displayName: user.displayName,
      uid: user.uid,
    },
    geometry: {
      type: 'Point',
      coordinates: [user.coords.longitude, user.coords.latitude],
    },
  }));

export const createMarkersOnMap = (marker: Marker, map: mapboxgl.Map) => {
  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
  });

  marker.popup.addEventListener('mouseenter', () => {
    marker.popup.style.cursor = 'pointer';

    if (marker.marker.properties.description) {
      popup
        .setLngLat(marker.marker.geometry.coordinates)
        .setHTML(marker.marker.properties.description)
        .addTo(map);
    }
  });

  marker.popup.addEventListener('mouseleave', () => {
    marker.popup.style.cursor = '';
    popup.remove();
  });

  return new mapboxgl.Marker(marker.popup)
    .setLngLat(marker.marker.geometry.coordinates)
    .addTo(map);
};
