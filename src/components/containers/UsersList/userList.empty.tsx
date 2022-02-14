import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
  Typography,
} from '@mui/material';
import { FC } from 'react';

interface UserListEmptyProps {
  count: number;
}

export const UserListEmpty: FC<UserListEmptyProps> = ({ count }) => {
  const template: number[] = [];

  for (let i = 0; i < count; i++) {
    template.push(i);
  }
  return (
    <List sx={{ width: 240 }}>
      {template.map((el) => (
        <ListItem alignItems="flex-start" key={el}>
          <ListItemAvatar>
            <Skeleton variant="circular" width={40} height={40} />
          </ListItemAvatar>
          <ListItemText
            primary={<Skeleton variant="text" />}
            secondary={
              <Typography component="span" variant="body2">
                <Skeleton variant="text" />
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};
