import {
  ListItem,
  List,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import React, { FC, Fragment } from "react";
import { UserProps } from "./usersList.container";

interface ListWrapperProps {
  users: UserProps[];
}
export const UsersList: FC<ListWrapperProps> = ({ users }) => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {users.map((user) => (
        <Fragment key={user.id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={user.name} src={user.picture} />
            </ListItemAvatar>
            <ListItemText
              primary={user.name}
              secondary={
                <>
                  <Typography
                    component="p"
                    variant="body2"
                    color={user.isActive ? "#007f5f" : "#f08080"}
                  >
                    {user.isActive ? "Online" : "Offline"}
                  </Typography>
                  <Typography
                    component="p"
                    variant="body2"
                    color="text.primary"
                  >
                    lon:{user.longitude}
                    lat:{user.latitude}
                  </Typography>
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </Fragment>
      ))}
    </List>
  );
};
