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
import { Marker } from "../../../models/map";
import MapBox from "./mapBox.component";

interface MapBoxContainerProps {
  markers?: Marker[];
  map: mapboxgl.Map | undefined;
  onSetMap: Dispatch<SetStateAction<mapboxgl.Map | undefined>>;
}

const MapBoxContainer: FC<MapBoxContainerProps> = (props) => {
  const { map, onSetMap, markers } = props;
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
    if (markers?.length && map) {
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
