import { createElement, FC } from "react";
import { UsersList } from "./usersList.component";
import { Geolocation } from "../../../models/geolocation.model";

interface UsersListContainerProps {
  geolocation: Geolocation[];
}

const UsersListContainer: FC<UsersListContainerProps> = ({ geolocation }) => {
  return createElement(UsersList, {
    geolocation,
  });
};

export default UsersListContainer;
