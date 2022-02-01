import mapboxgl, { LngLatLike } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { createElement, FC, useEffect, useRef, useState } from "react";
import useMarkers from "../../../hooks/useMarkers";
import { useNavigation } from "../../../hooks/useNavigation";
import MapBox from "./mapBox.component";

const MapBoxContainer: FC = () => {
  const [map, setMap] = useState<mapboxgl.Map>();
  const navigation = useNavigation();
  const markers = useMarkers(map);
  const mapNode = useRef<HTMLDivElement>(null);
  const center: LngLatLike = [
    navigation?.coords.longitude ?? 24.065285,
    navigation?.coords.latitude ?? 49.8138699,
  ];

  useEffect(() => {
    const node = mapNode.current;

    if (typeof window === "undefined" || node === null) {
      return;
    }

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      center,
      zoom: 11,
    });

    mapboxMap.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );

    setMap(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, []);

  useEffect(() => {
    if (markers.length && map) {
      for (const marker of markers) {
        new mapboxgl.Marker(marker.popup)
          .setLngLat(marker.marker.geometry.coordinates)
          .addTo(map);
      }
    }
  }, [map, markers]);

  return createElement(MapBox, {
    mapNode,
  });
};

export default MapBoxContainer;
