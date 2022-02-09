import { createElement, FC } from "react";
import { UsersList } from "./usersList.component";
import { User } from "../../../models/user.model";

interface UsersListContainerProps {
  users: User[];
  onUserClick: (user: User) => void;
}

const UsersListContainer: FC<UsersListContainerProps> = ({
  users,
  onUserClick,
}) => {
  return createElement(UsersList, {
    users,
    onUserClick,
  });
};

export default UsersListContainer;
