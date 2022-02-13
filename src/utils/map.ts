import mapboxgl from 'mapbox-gl';
import { GeoJSONObject, Marker } from '../models/map.model';
import { UserGeolocation } from '../models/usersGeolocation';

export const returnGeoJSONArray = (users: UserGeolocation[]): GeoJSONObject[] =>
  users.map((user) => ({
    properties: {
      description: user.displayName,
      iconSize: [40, 40],
      backgroundImage: user.photoURL,
      displayName: user.displayName,
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

  new mapboxgl.Marker(marker.popup)
    .setLngLat(marker.marker.geometry.coordinates)
    .addTo(map);
};
