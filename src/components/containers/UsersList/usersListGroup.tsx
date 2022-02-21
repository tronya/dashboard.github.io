import { Avatar, AvatarGroup, Tooltip } from '@mui/material';
import { FC } from 'react';
import { ScreenType } from '../../../constants';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { UserGeolocation } from '../../../models/usersGeolocation';
import { getUserStatus, UserStatus } from '../../../utils/user';
import { StyledBadge } from './userList.styled';
import { UserListGroupEmpty } from './usersListGroup.empty';

interface UsersListGroupProps {
  users: UserGeolocation[];
  onUserClick: (user: UserGeolocation) => void;
}

const UsersListGroup: FC<UsersListGroupProps> = ({ users, onUserClick }) => {
  const { screenType } = useWindowDimensions();

  if (!users.length) {
    return <UserListGroupEmpty count={5} />;
  }

  const maxCountOfAvatars =
    screenType === ScreenType.DESKTOP
      ? 10
      : screenType === ScreenType.TABLET
      ? 7
      : 4;

  const sortedUsers = users.sort((a, b) =>
    getUserStatus(b.timestamp) === UserStatus.ONLINE
      ? 1
      : getUserStatus(a.timestamp) === UserStatus.ONLINE
      ? -1
      : 0
  );

  return (
    <AvatarGroup max={maxCountOfAvatars} total={users.length}>
      {sortedUsers.map((user) => (
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
          onClick={() => onUserClick(user)}
          sx={{ cursor: 'pointer' }}
          key={user.uid}
          color={
            getUserStatus(user.timestamp) === UserStatus.ONLINE
              ? 'success'
              : 'error'
          }
        >
          <Tooltip title={user.displayName!!} placement="bottom" arrow>
            <Avatar
              alt={user.displayName!!}
              src={user.photoURL!!}
              sx={{ width: 40, height: 40 }}
            />
          </Tooltip>
        </StyledBadge>
      ))}
    </AvatarGroup>
  );
};

export default UsersListGroup;
