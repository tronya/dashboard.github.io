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
import { FC, Fragment } from "react";
import { UserProps } from "./usersList.container";
import { UserListEmpty } from "./userList.empty";
import { lime, purple } from "@mui/material/colors";

interface ListWrapperProps {
  users: UserProps[];
}
export const UsersList: FC<ListWrapperProps> = ({ users }) => {
  if (!users.length) {
    return <UserListEmpty count={6}/>;
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
                  color={user.isActive ? lime[500] : purple[500]}
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
