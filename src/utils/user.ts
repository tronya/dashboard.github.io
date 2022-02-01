import moment from "moment";

enum UserStatus {
  OFFLINE = "Offline",
  ONLINE = "Online",
}

export const getUserStatus = (userTimestamp: number): UserStatus => {
  const currentDate = moment().valueOf();
  const differenceInMilliseconds = moment(currentDate).diff(
    moment(userTimestamp)
  );
  const differenceInMinutes = +moment(differenceInMilliseconds).format("m");
  return differenceInMinutes > 5 ? UserStatus.OFFLINE : UserStatus.ONLINE;
};
