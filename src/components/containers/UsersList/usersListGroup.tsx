import { Avatar, Tooltip } from "@mui/material";
import { FC } from "react";
import { ScreenType } from "../../../constants";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { UserGeolocation } from "../../../models/usersGeolocation";
import { getUserStatus } from "../../../utils/user";
import { UserListEmpty } from "./userList.empty";
import { StyledAvatarGroup, StyledBadge } from "./userList.styled";

interface UsersListGroupProps {
  users: UserGeolocation[];
  onUserClick: (user: UserGeolocation) => void;
}

const UsersListGroup: FC<UsersListGroupProps> = ({ users, onUserClick }) => {
  const { screenType } = useWindowDimensions();

  if (!users.length) {
    return <UserListEmpty count={6} />;
  }

  const maxCountOfAvatars =
    screenType === ScreenType.DESKTOP
      ? 10
      : screenType === ScreenType.TABLET
      ? 7
      : 4;

  return (
    <StyledAvatarGroup max={maxCountOfAvatars} total={users.length}>
      {users.map((user) => (
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
          onClick={() => onUserClick(user)}
          sx={{ cursor: "pointer" }}
          key={user.uid}
          color={
            getUserStatus(user.timestamp) === "Online" ? "success" : "error"
          }
        >
          <Tooltip title={user.displayName!!} placement="bottom" arrow>
            <Avatar
              alt={user.displayName!!}
              src={user.photoURL!!}
              sx={{ width: 50, height: 50 }}
            />
          </Tooltip>
        </StyledBadge>
      ))}
    </StyledAvatarGroup>
  );
};

export default UsersListGroup;
