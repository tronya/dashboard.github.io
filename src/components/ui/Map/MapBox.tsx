import mapboxgl, { LngLatLike } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";
import { useNavigation } from "../../../hooks/useNavigation";

function MapBox() {
  const [map, setMap] = useState<mapboxgl.Map>();
  const navigation = useNavigation();
  const center: LngLatLike = [
    navigation?.coords.longitude ?? 24.065285,
    navigation?.coords.latitude ?? 49.8138699,
  ];
  const mapNode = useRef(null);

  useEffect(() => {
    const node = mapNode.current;


    if (typeof window === "undefined" || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      center,
      zoom: 9,
    });

    // Add geolocate control to the map.
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

  return <div ref={mapNode} style={{ width: "100%", height: "100%" }} />;
}

export default MapBox;
