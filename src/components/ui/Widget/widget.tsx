import { Typography, Paper } from '@mui/material';
import { FC } from 'react';
import { BarType } from '../../../models/widget';
import Chart from '../Chart/chart';

interface WidgetProps {
  data: BarType[];
  title: string;
}

const Widget: FC<WidgetProps> = ({ data, title }) => (
  <Paper sx={{ height: 250, width: '100%', padding: 2 }}>
    <Typography variant="h6">{title}</Typography>
    <Chart data={data} />
  </Paper>
);

export default Widget;
