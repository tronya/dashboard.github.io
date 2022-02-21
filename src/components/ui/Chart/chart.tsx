import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  TooltipProps,
} from 'recharts';
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';
import { BarType } from '../../../models/widget';

interface ChartProps {
  data: BarType[];
}

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active) {
    return (
      <Box bgcolor="white" p={2}>
        <Typography
          variant="body1"
          sx={{ color: payload?.[0].payload.fill }}
          fontWeight="bold"
        >
          {label}
        </Typography>
        <Typography
          variant="body1"
          color="black"
        >{`Total: ${payload?.[0].value}`}</Typography>
      </Box>
    );
  }

  return null;
};

const Chart: FC<ChartProps> = ({ data }) => (
  <ResponsiveContainer width="95%" height="95%">
    <BarChart
      width={250}
      height={200}
      data={data}
      margin={{
        top: 10,
        right: 0,
        left: 0,
        bottom: 10,
      }}
      barSize={25}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis allowDecimals={false} />
      <Tooltip content={<CustomTooltip />} />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="total" name="Total">
        {data.map((entry) => (
          <Cell key={`cell-${entry.name}`} fill={entry.fill} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

export default Chart;
