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
} from 'recharts';

interface BarType {
  name: string;
  total: number;
  fill: string;
}

interface ChartProps {
  data: BarType[];
}

const Chart: FC<ChartProps> = ({ data }) => {
  return (
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
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="total" name="Total">
          {data.map((entry) => (
            <Cell key={`cell-${entry.name}`} fill={entry.fill} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
