import mapboxgl, { LngLatLike } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  createElement,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import { useNavigation } from "../../../hooks/useNavigation";
import { Marker } from "../../../models/map.model";
import { Geolocation } from "../../../models/geolocation.model";
import MapBox from "./mapBox.component";

interface MapBoxContainerProps {
  markers?: Marker[];
  map: mapboxgl.Map | undefined;
  onSetMap: Dispatch<SetStateAction<mapboxgl.Map | undefined>>;
  selectedLocation: Geolocation | null;
}

const MapBoxContainer: FC<MapBoxContainerProps> = (props) => {
  const { map, onSetMap, markers, selectedLocation } = props;
  const navigation = useNavigation();
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

    if (markers?.length) {
      for (const marker of markers) {
        new mapboxgl.Marker(marker.popup)
          .setLngLat(marker.marker.geometry.coordinates)
          .addTo(mapboxMap);
      }
    }

    mapboxMap.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );

    onSetMap(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, []);

  useEffect(() => {
    if (selectedLocation && map) {
      map.flyTo({
        center: [
          selectedLocation?.geolocationCoords.coords.longitude,
          selectedLocation?.geolocationCoords.coords.latitude,
        ] as LngLatLike,
        essential: true,
        zoom: 14,
      });
    }
  }, [map, selectedLocation]);

  return createElement(MapBox, {
    mapNode,
  });
};

export default MapBoxContainer;
