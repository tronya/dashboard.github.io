import mapboxgl, { LngLatLike } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { createElement, FC, useEffect } from "react";
import { Marker } from "../../../models/map.model";
import MapBox from "./mapBox.component";
import { createMarkersOnMap } from "../../../utils/map";
import useMap from "../../../hooks/useMap";
import { UserGeolocation } from "../../../models/usersGeolocation";

interface MapBoxContainerProps {
  markers?: Marker[];
  selectedUser: UserGeolocation | null;
}

const MapBoxContainer: FC<MapBoxContainerProps> = (props) => {
  const { markers, selectedUser } = props;
  const { mapboxMap, mapNode } = useMap();

  useEffect(() => {
    if (mapboxMap) {
      mapboxMap.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
          showUserHeading: true,
        })
      );

      return () => {
        mapboxMap.remove();
      };
    }
  }, [mapboxMap]);

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
    if (markers?.length && mapboxMap) {
      for (const marker of markers) {
        createMarkersOnMap(marker, mapboxMap);
      }
    }
  }, [mapboxMap, markers]);

  return createElement(MapBox, {
    mapNode,
  });
};

export default MapBoxContainer;
