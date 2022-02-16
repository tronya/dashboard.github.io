import { Box, Paper } from '@mui/material';
import { FC } from 'react';
import Chart from '../Chart/chart';

const Widget: FC = () => {
  return (
    <Paper sx={{ height: 250, width: 250, padding: 2 }}>
      <Box>Users Statuses</Box>
      <Chart />
    </Paper>
  );
};

export default Widget;
