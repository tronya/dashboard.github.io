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
import { UserStatus } from '../../../utils/user';

const Chart: FC = () => {
  const data = [
    {
      name: UserStatus.ONLINE,
      total: 2,
      fill: '#66bb6a',
    },
    {
      name: UserStatus.OFFLINE,
      total: 5,
      fill: '#f44336',
    },
  ];

  return (
    // <ResponsiveContainer width="100%" height="100%">
    <BarChart
      width={250}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barSize={20}
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
    // </ResponsiveContainer>
  );
};

export default Chart;
