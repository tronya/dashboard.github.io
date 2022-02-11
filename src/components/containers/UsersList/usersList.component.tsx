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
import { Box, StyledList } from "./userList.styled";
import { getUserStatus } from "../../../utils/user";
import { useAuth } from "../../../hooks/useAuth";
import { stringAvatar } from "../../../utils/user";
import { User } from "../../../models/user.model";
import { UserGeolocation } from "../../../models/usersGeolocation";
import { useTranslation } from "react-i18next";

interface ListWrapperProps {
  users: UserGeolocation[];
  onUserClick: (user: UserGeolocation) => void;
  favorites?: string[];
  starIcon?: (id?: string) => void;
}

export const UsersList: FC<ListWrapperProps> = ({
  users,
  onUserClick,
  starIcon,
}) => {
  const { user: authUser } = useAuth();
  const { t } = useTranslation();

  if (!users.length) {
    return <UserListEmpty count={6} />;
  }

  const lastUserUid = users[users.length - 1].uid;

  return (
    <StyledList sx={{ mr: 2, mb: 2, bgcolor: "background.paper" }}>
      {users.map((user) => {
        const isCurrentUser = user.uid === authUser?.uid;

        return (
          <Box
            key={user.uid}
            onClick={() => onUserClick(user)}
            sx={{ cursor: "pointer" }}
          >
            <ListItem alignItems="center">
              {user.displayName && user.photoURL && (
                <ListItemAvatar>
                  <Avatar
                    alt={user.displayName}
                    src={user.photoURL}
                    {...stringAvatar(user.displayName)}
                  />
                </ListItemAvatar>
              )}
              <ListItemText
                sx={{ color: grey[300] }}
                primary={
                  <>
                    {user.displayName}
                    <Typography variant="caption">
                      {isCurrentUser && t("usersList.itsYou")}
                    </Typography>
                  </>
                }
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    color={
                      getUserStatus(user.timestamp) === "Online"
                        ? green[400]
                        : grey[500]
                    }
                  >
                    {getUserStatus(user.timestamp)}
                  </Typography>
                }
              />
              {starIcon && starIcon(user.uid)}
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
