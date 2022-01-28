import {
  ListItem,
  List,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  Box,
  Skeleton,
} from "@mui/material";
import React, { FC, Fragment } from "react";
import { UserProps } from "./usersList.container";

interface ListWrapperProps {
  users: UserProps[];
}
export const UsersList: FC<ListWrapperProps> = ({ users }) => {
  if (!users.length) {
    return (
      <List sx={{ width: 240 }}>
        {Array(5).fill(5).map((_,i) => (
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
  }
  return (
    <List sx={{ width: 240, bgcolor: "background.paper" }}>
      {users.map((user) => (
        <Fragment key={user.id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={user.name} src={user.picture} />
            </ListItemAvatar>
            <ListItemText
              primary={user.name}
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  color={user.isActive ? "#007f5f" : "#f08080"}
                >
                  {user.isActive ? "Online" : "Offline"}
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </Fragment>
      ))}
    </List>
  );
};
