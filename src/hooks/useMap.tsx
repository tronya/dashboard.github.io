import mapboxgl, { LngLatLike } from 'mapbox-gl';
import { RefObject, useEffect, useRef, useState } from 'react';
import { createFeatureCollection } from '../components/containers/Map/mapBox.model';

interface UseMap {
  mapboxMap: mapboxgl.Map | null;
  mapNode: RefObject<HTMLDivElement>;
}

const useMap = (): UseMap => {
  const [mapboxMap, setMapboxMap] = useState<mapboxgl.Map | null>(null);
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
    mapboxMap.on('load', async () => {
      mapboxMap.addSource('users', {
        type: 'geojson',
        data: createFeatureCollection([]),
      });

      mapboxMap.addLayer({
        id: 'markers',
        type: 'circle',
        source: 'users',
        paint: {
          'circle-radius': 8,
          'circle-stroke-width': 2,
          'circle-color': 'red',
          'circle-stroke-color': 'white',
        },
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

      setMapboxMap(mapboxMap);
    });

    return () => {
      mapboxMap.remove();
      console.log('remove');
      setMapboxMap(null);
    };
  }, []);

  return { mapboxMap, mapNode };
};

export default useMap;
