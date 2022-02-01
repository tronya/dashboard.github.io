import { createElement, FC } from "react";
import { UsersList } from "./usersList.component";
import { Geolocation } from "../../../models/geolocation.model";

interface UsersListContainerProps {
  geolocation: Geolocation[];
  onUserClick: (location: Geolocation) => void;
}

const UsersListContainer: FC<UsersListContainerProps> = ({
  geolocation,
  onUserClick,
}) => {
  return createElement(UsersList, {
    geolocation,
    onUserClick,
  });
};

export default UsersListContainer;
