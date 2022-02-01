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
import { Geolocation } from "../../../models/geolocation.model";
import { getAuth } from "firebase/auth";
import { StyledList } from "./userList.styled";
import { getUserStatus } from "../../../utils/user";

interface ListWrapperProps {
  geolocation: Geolocation[];
}

export const UsersList: FC<ListWrapperProps> = ({ geolocation }) => {
  const authUser = getAuth().currentUser;

  if (!geolocation.length) {
    return <UserListEmpty count={6} />;
  }

  const lastUserUid = geolocation[geolocation.length - 1].user.uid;

  return (
    <StyledList sx={{ mr: 2, mb: 2, bgcolor: "background.paper" }}>
      {geolocation.map((location) => {
        const { user, geolocationCoords } = location;
        const isCurrentUser = user.uid === authUser?.uid;

        return (
          <Fragment key={user.uid}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={user.displayName} src={user.photoURL} />
              </ListItemAvatar>
              <ListItemText
                sx={{ color: grey[300] }}
                primary={
                  <>
                    {user.displayName}
                    <Typography variant="caption">
                      {isCurrentUser && " (It's you)"}
                    </Typography>
                  </>
                }
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    color={
                      getUserStatus(geolocationCoords.timestamp) === "Online"
                        ? green[400]
                        : grey[500]
                    }
                  >
                    {getUserStatus(geolocationCoords.timestamp)}
                  </Typography>
                }
              />
            </ListItem>
            {lastUserUid !== user.uid && (
              <Divider variant="inset" component="li" />
            )}
          </Fragment>
        );
      })}
    </StyledList>
  );
};
