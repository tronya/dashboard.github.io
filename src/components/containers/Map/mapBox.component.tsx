import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { Paper } from '@mui/material';
import { FC, LegacyRef, useEffect } from 'react';

interface MapBoxProps {
  mapNode: LegacyRef<HTMLDivElement> | null;
}

const MapBox: FC<MapBoxProps> = ({ mapNode }) => {
  const handleClick = () => {
    fetch(
      'https://api.mapbox.com/geocoding/v5/mapbox.places/24.0228976,49.8360907.json?limit=1&types=region&access_token=pk.eyJ1IjoidHJvbnlhIiwiYSI6ImNpdXNteHUwdzAwMWkyenBmamRlbTk2Zm8ifQ.aFKT4IOHyPCPRt_GNfUYnw'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <Paper sx={{ height: 'calc(75vh)' }}>
      <div ref={mapNode} style={{ width: '100%', height: '100%' }} />

      <button id="geocoder" onClick={handleClick}>
        test
      </button>
    </Paper>
  );
};

export default MapBox;
