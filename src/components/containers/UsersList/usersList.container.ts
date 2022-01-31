import { createElement, FC } from "react";
import { UsersList } from "./usersList.component";
import { User } from "../../../models/user.model";

interface UsersListContainerProps {
  users: User[];
}

const UsersListContainer: FC<UsersListContainerProps> = ({ users }) => {
  return createElement(UsersList, {
    users,
  });
};

export default UsersListContainer;
