import {
  AvatarGroup,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { StyledBadge } from './userList.styled';

interface UserListGroupEmptyProps {
  count: number;
}

export const UserListGroupEmpty: FC<UserListGroupEmptyProps> = ({ count }) => {
  const template: number[] = [];

  for (let i = 0; i < count; i++) {
    template.push(i);
  }

  return (
    <AvatarGroup max={count} total={count}>
      {template.map((el) => (
        <StyledBadge
          key={el}
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Skeleton variant="circular" width={50} height={50} />
        </StyledBadge>
      ))}
    </AvatarGroup>
  );
};
