import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { Paper } from '@mui/material';
import { FC, LegacyRef, useEffect } from 'react';

interface MapBoxProps {
  mapNode: LegacyRef<HTMLDivElement> | null;
}

const MapBox: FC<MapBoxProps> = ({ mapNode }) => (
  <Paper sx={{ height: 'calc(60vh)' }}>
    <div ref={mapNode} style={{ width: '100%', height: '100%' }} />
  </Paper>
);

export default MapBox;
