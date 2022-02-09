import {
  List,
  ListItem,
  Checkbox,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { FC, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getUsers } from "../../../../pages/api/users";
import { User } from "../../../models/user.model";
import { stringAvatar } from "../../../utils/user";

interface SelectableUsersProps {
  selectedUsers: (users: string[]) => void;
}

const SelectableUsers: FC<SelectableUsersProps> = ({ selectedUsers }) => {
  const [checked, setChecked] = useState<string[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers()
      .then((result) => setUsers(result))
      .catch((error) => toast.error(error));
  }, []);

  const handleToggle = (id: string) => () => {
    const newUsers = [...checked];
    if (newUsers.includes(id)) {
      newUsers.splice(newUsers.indexOf(id), 1);
    } else {
      newUsers.push(id);
    }
    setChecked(newUsers);
    selectedUsers(newUsers);
  };

  return (
    <List dense sx={{ width: "100%", maxWidth: 360 }}>
      {users.map((user) => {
        const labelId = `checkbox-list-secondary-label-${user.uid}`;
        return (
          <ListItem
            key={user.uid}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(user.uid)}
                checked={checked.includes(user.uid)}
                inputProps={{ "aria-labelledby": labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${user.displayName}`}
                  src={user.photoURL}
                  {...stringAvatar(user.displayName)}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={user.displayName} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default SelectableUsers;