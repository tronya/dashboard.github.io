import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import { FC } from "react";
import { UserListEmpty } from "./userList.empty";
import { green, grey } from "@mui/material/colors";
import { Geolocation } from "../../../models/geolocation.model";
import { Box, StyledList } from "./userList.styled";
import { getUserStatus } from "../../../utils/user";
import { useAuth } from "../../../hooks/useUser";
import { stringAvatar } from "../../../utils/user";

interface ListWrapperProps {
  geolocation: Geolocation[];
  onUserClick: (location: Geolocation) => void;
  favorites?: string[];
  starIcon?: (id: string) => void;
}

export const UsersList: FC<ListWrapperProps> = ({
  geolocation,
  onUserClick,
  starIcon,
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
            <ListItem alignItems="center">
              <ListItemAvatar>
                <Avatar
                  alt={user.displayName}
                  src={user.photoURL}
                  {...stringAvatar(user.displayName)}
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
              {starIcon && starIcon(location.id)}
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
