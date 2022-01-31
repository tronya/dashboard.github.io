import { Paper } from "@mui/material";
import { FC, LegacyRef } from "react";

interface MapBoxProps {
  mapNode: LegacyRef<HTMLDivElement> | null;
}

const MapBox: FC<MapBoxProps> = ({ mapNode }) => (
  <Paper sx={{ height: 600 }}>
    <div ref={mapNode} style={{ width: "100%", height: "100%" }} />
  </Paper>
);

export default MapBox;
