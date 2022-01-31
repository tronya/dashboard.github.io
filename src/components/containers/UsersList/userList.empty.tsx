import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
  Typography,
} from "@mui/material";
import { FC } from "react";

interface UserListEmptyProps {
  count: number;
}

export const UserListEmpty: FC<UserListEmptyProps> = ({ count }) => {
  const template:number[] = [];

  for (let i = 0; i < count; i++) {
    template.push(i);
  }
  return (
    <List sx={{ width: 240 }}>
      {template.map((_, i) => (
        <ListItem alignItems="flex-start" key={i}>
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
