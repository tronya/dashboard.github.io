import mapboxgl, { LngLatLike } from 'mapbox-gl';
import { RefObject, useEffect, useRef, useState } from 'react';

interface UseMap {
  mapboxMap: mapboxgl.Map | undefined;
  mapNode: RefObject<HTMLDivElement>;
}

const useMap = (): UseMap => {
  const [mapboxMap, setMapboxMap] = useState<mapboxgl.Map>();
  const mapNode = useRef<HTMLDivElement>(null);
  const center: LngLatLike = [24.065285, 49.8138699];

  useEffect(() => {
    const node = mapNode.current;

    if (typeof window === 'undefined' || node === null) {
      return;
    }

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: 'mapbox://styles/tronya/cixa87ptp00g12qo9jjbqm9mk',
      center,
      zoom: 11,
    });

    setMapboxMap(mapboxMap);
  }, []);

  return { mapboxMap, mapNode };
};

export default useMap;
