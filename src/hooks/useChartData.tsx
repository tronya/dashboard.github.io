import { useEffect, useState } from 'react';
import { fetchUsersRegions } from '../../pages/api/usersGeolocation';
import {
  UserGeolocation,
  UserGeolocationNew,
} from '../models/usersGeolocation';
import { BarType } from '../models/widget';
import { getUserStatus, UserStatus } from '../utils/user';

enum DataType {
  CITIES = 'cities',
  STATUSES = 'statuses',
}

interface UseChartDataProps {
  statusesData: BarType[];
  citiesData: BarType[];
}

const getData = (data: Record<string, number>, type: DataType) =>
  Object.entries(data).map(([key, value]) => ({
    name: key,
    total: value,
    fill:
      type === 'cities'
        ? `#${Math.floor(Math.random() * 16777215).toString(16)}`
        : key === UserStatus.ONLINE
        ? '#66bb6a'
        : '#f44336',
  }));

const useChartData = (
  usersGeolocation: UserGeolocation[]
): UseChartDataProps => {
  const [newUsersGeolocation, setNewUsersGeolocation] = useState<
    UserGeolocationNew[]
  >([]);

  useEffect(() => {
    usersGeolocation.forEach((user) => {
      fetchUsersRegions(user.coords.longitude, user.coords.latitude).then(
        (data) => {
          const region = data.features[0].text;
          setNewUsersGeolocation([
            ...newUsersGeolocation,
            {
              ...user,
              region,
            },
          ]);
        }
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usersGeolocation]);

  const countUsersByLocations = newUsersGeolocation.reduce((acc, val) => {
    if (acc[val.region]) {
      acc[val.region] += 1;
    } else {
      acc[val.region] = 1;
    }
    return acc;
  }, {});

  const countUsersByStatuses = usersGeolocation.reduce(
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

  const statusesData = getData(countUsersByStatuses, DataType.STATUSES);
  const citiesData = getData(countUsersByLocations, DataType.CITIES);

  return { statusesData, citiesData };
};

export default useChartData;
