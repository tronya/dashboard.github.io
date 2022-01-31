import { pink, blue } from "@mui/material/colors";
import mapboxgl, { LngLatLike } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { createElement, FC, useEffect, useRef } from "react";
import { User } from "../../../models/user.model";
import { returnArrayOfGeoJSON } from "../../../utils/mapUtils";
import { useNavigation } from "../../navigation/useNavigation";
import MapBox from "./mapBox.component";

interface MapBoxContainerProps {
  users: User[];
}

const MapBoxContainer: FC<MapBoxContainerProps> = ({ users }) => {
  const navigation = useNavigation();
  const mapNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = mapNode.current;
    const center: LngLatLike = [
      navigation?.coords.longitude || 24.065285,
      navigation?.coords.latitude || 49.8138699,
    ];

    if (typeof window === "undefined" || node === null) {
      return;
    }

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      center,
      zoom: 12,
    });

    const geojson = returnArrayOfGeoJSON(users);

    for (const marker of geojson) {
      const el = document.createElement("div");
      const width = marker.properties.iconSize[0];
      const height = marker.properties.iconSize[1];
      el.style.borderRadius = "50%";
      el.style.backgroundImage = `url(${marker.properties.backgroundImage})`;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      el.style.backgroundSize = "100%";
      el.style.boxShadow = "2px 2px 8px rgba(0, 0, 0, 0.5)";
      el.style.border = `1px solid ${
        marker.properties.gender === "female" ? pink[300] : blue[400]
      }`;

      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
      });

      el.addEventListener("mouseenter", () => {
        popup
          .setLngLat(marker.geometry.coordinates)
          .setHTML(marker.properties.description)
          .addTo(mapboxMap);
      });

      el.addEventListener("mouseleave", () => {
        popup.remove();
      });

      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(mapboxMap);
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

    return () => {
      mapboxMap.remove();
    };
  }, []);

  return createElement(MapBox, {
    mapNode,
  });
};

export default MapBoxContainer;
