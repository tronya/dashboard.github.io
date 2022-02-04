import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import { FC } from "react";
import { UserListEmpty } from "./userList.empty";
import { green, grey } from "@mui/material/colors";
import { Geolocation } from "../../../models/geolocation.model";
import { StyledList } from "./userList.styled";
import { getUserStatus } from "../../../utils/user";
import { useAuth } from "../../../hooks/useUser";
import { NO_PROFILE_IMAGE_URL } from "../../../constants";

interface ListWrapperProps {
  geolocation: Geolocation[];
  onUserClick: (location: Geolocation) => void;
}

export const UsersList: FC<ListWrapperProps> = ({
  geolocation,
  onUserClick,
}) => {
  const { user: authUser } = useAuth();

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
          <Box
            key={user.uid}
            onClick={() => onUserClick(location)}
            sx={{ cursor: "pointer" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt={user.displayName}
                  src={user.photoURL ?? NO_PROFILE_IMAGE_URL}
                />
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
          </Box>
        );
      })}
    </StyledList>
  );
};
