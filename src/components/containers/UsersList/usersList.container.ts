import { createElement, FC } from 'react';
import { UsersList } from './usersList.component';
import { UserGeolocation } from '../../../models/usersGeolocation';

interface UsersListContainerProps {
  users: UserGeolocation[];
  onUserClick: (user: UserGeolocation) => void;
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
