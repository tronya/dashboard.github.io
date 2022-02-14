import moment from 'moment';

enum UserStatus {
  OFFLINE = 'Offline',
  ONLINE = 'Online',
}

export const getUserStatus = (userTimestamp: number): UserStatus => {
  const currentDate = moment().valueOf();
  const differenceInMilliseconds = moment(currentDate).diff(
    moment(userTimestamp)
  );
  const differenceInMinutes = +moment(differenceInMilliseconds).format('m');
  return differenceInMinutes > 2 ? UserStatus.OFFLINE : UserStatus.ONLINE;
};

export const stringToColor = (string: string) => {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }

  return color;
};

export const stringAvatar = (name: string) => ({
  sx: {
    bgcolor: stringToColor(name),
  },
  children: getFirstUppercaseLetters(name),
});

export const getFirstUppercaseLetters = (name: string | undefined | null) =>
  `${name?.split(' ')[0][0].toUpperCase()}${name
    ?.split(' ')[1][0]
    .toUpperCase()}`;
