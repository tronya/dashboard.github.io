import mapboxgl, { LngLatLike } from "mapbox-gl";
import { RefObject, useEffect, useRef, useState } from "react";
import { useNavigation } from "./useNavigation";

interface UseMap {
  mapboxMap: mapboxgl.Map | undefined;
  mapNode: RefObject<HTMLDivElement>;
}

const useMap = (): UseMap => {
  const [mapboxMap, setMapboxMap] = useState<mapboxgl.Map>();
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

    setMapboxMap(mapboxMap);
  }, []);

  return { mapboxMap, mapNode };
};

export default useMap;
