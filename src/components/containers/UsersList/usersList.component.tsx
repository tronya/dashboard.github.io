import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import { FC, Fragment } from "react";
import { UserListEmpty } from "./userList.empty";
import { green, grey } from "@mui/material/colors";
import { User } from "../../../models/user.model";
import { getAuth } from "firebase/auth";
import { StyledList } from "./userList.styled";

interface ListWrapperProps {
  users: User[];
}

export const UsersList: FC<ListWrapperProps> = ({ users }) => {
  const authUser = getAuth().currentUser;

  if (!users.length) {
    return <UserListEmpty count={6} />;
  }

  return (
    <StyledList sx={{ mr: 2, mb: 2, bgcolor: "background.paper" }}>
      {users.map((user) => {
        const isCurrentUser = user.uid === authUser?.uid;

        return (
          <Fragment key={user.uid}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={user.displayName} src={user.photoURL} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <>
                    {user.displayName}
                    <Typography variant="caption">
                      {isCurrentUser ? " (It's you)" : undefined}
                    </Typography>
                  </>
                }
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    // color={user.isActive ? green[700] : grey[700]} TODO
                    color={isCurrentUser ? green[700] : grey[700]}
                  >
                    {/* {user.isActive ? "Online" : "Offline"} TODO */}
                    {isCurrentUser ? "Online" : "Offline"}
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </Fragment>
        );
      })}
    </StyledList>
  );
};
