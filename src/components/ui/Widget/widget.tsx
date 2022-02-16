import { Typography, Paper } from '@mui/material';
import { FC } from 'react';
import { UserGeolocation } from '../../../models/usersGeolocation';
import { getUserStatus, UserStatus } from '../../../utils/user';
import Chart from '../Chart/chart';

interface WidgetProps {
  data: UserGeolocation[];
}

const Widget: FC<WidgetProps> = ({ data }) => {
  const countUsersByStatuses = data.reduce(
    (acc, val) => {
      if (getUserStatus(val.timestamp) === UserStatus.ONLINE) {
        acc[UserStatus.ONLINE] += 1;
      }
      if (getUserStatus(val.timestamp) === UserStatus.OFFLINE) {
        acc[UserStatus.OFFLINE] += 1;
      }
      return acc;
    },
    {
      [UserStatus.ONLINE]: 0,
      [UserStatus.OFFLINE]: 0,
    }
  );

  const newData = Object.entries(countUsersByStatuses).map(([key, value]) => ({
    name: key,
    total: value as number,
    fill: key === UserStatus.ONLINE ? '#66bb6a' : '#f44336',
  }));

  return (
    <Paper sx={{ height: 250, width: '100%', padding: 2 }}>
      <Typography variant="h6">Users Statuses</Typography>
      <Chart data={newData} />
    </Paper>
  );
};

export default Widget;
