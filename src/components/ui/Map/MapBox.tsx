import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";
import { useNavigation } from "../../navigation/useNavigation";

function MapBox() {
  const [map, setMap] = useState<mapboxgl.Map>();
  const navigation = useNavigation();
  const mapNode = useRef(null);
  const center: [number, number] = [
    navigation?.coords.longitude || 24.065285,
    navigation?.coords.latitude || 49.8138699,
  ];

  useEffect(() => {
    const node = mapNode.current;
    if (typeof window === "undefined" || node === null) return;
    
    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken:
        "pk.eyJ1IjoidHJvbnlhIiwiYSI6ImNpdXNteHUwdzAwMWkyenBmamRlbTk2Zm8ifQ.aFKT4IOHyPCPRt_GNfUYnw", //process.env.NEXT_PUBLIC_MAPBOX_TOKEN
      style: "mapbox://styles/mapbox/streets-v11",
      center,
      zoom: 9,
    });
    setMap(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, []);

  return <div ref={mapNode} style={{ width: "100%", height: "100%" }} />;
}

export default MapBox;
