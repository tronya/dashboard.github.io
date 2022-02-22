import { GeoJSONSource, LngLatLike } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { createElement, FC, useEffect } from 'react';
import MapBox from './mapBox.component';
import useMap from '../../../hooks/useMap';
import { UserGeolocation } from '../../../models/usersGeolocation';
import {
  prepareUserData,
  setUserGeolocationData,
} from '../../../../pages/api/usersGeolocation';
import { useAuth } from '../../../hooks/useAuth';
import { Feature } from 'geojson';
import { createFeatureCollection } from './mapBox.model';

interface MapBoxContainerProps {
  selectedUser: UserGeolocation | null;
  features: Feature[];
}

const MapBoxContainer: FC<MapBoxContainerProps> = ({
  selectedUser,
  features,
}) => {
  const { mapboxMap, mapNode } = useMap();
  const authUser = useAuth();

  useEffect(() => {
    if (mapboxMap) {
      console.count('update');
      const geoSource = mapboxMap.getSource('users') as GeoJSONSource;
      geoSource.setData(createFeatureCollection(features));
    }
  }, [features]);

  useEffect(() => {
    if (selectedUser && mapboxMap) {
      mapboxMap.flyTo({
        center: [
          selectedUser?.coords.longitude,
          selectedUser?.coords.latitude,
        ] as LngLatLike,
        essential: true,
        zoom: 14,
      });
    }
  }, [mapboxMap, selectedUser]);

  useEffect(() => {
    const geolocationUpdater = navigator.geolocation.watchPosition(
      (position) => {
        if (authUser.user?.uid) {
          // if User exists update his location
          setUserGeolocationData(
            authUser.user.uid,
            prepareUserData(position, authUser.user)
          );
        }
      }
    );
    return () => {
      navigator.geolocation.clearWatch(geolocationUpdater);
    };
  }, [authUser.user]);

  return createElement(MapBox, {
    mapNode,
  });
};

export default MapBoxContainer;
