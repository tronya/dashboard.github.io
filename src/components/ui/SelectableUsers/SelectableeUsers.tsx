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
import { getGeolocation } from "../../../../pages/api/geolocation";
import { Geolocation } from "../../../models/geolocation.model";

interface SelectableUsersProps {
  selectedUsers: (users: string[]) => void;
}
const SelectableUsers: FC<SelectableUsersProps> = ({ selectedUsers }) => {
  const [checked, setChecked] = useState<string[]>([]);
  const [users, setUsers] = useState<Geolocation[]>([]);

  useEffect(() => {
    getGeolocation()
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
        const labelId = `checkbox-list-secondary-label-${user.user.uid}`;
        return (
          <ListItem
            key={user.id}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(user.id)}
                checked={checked.includes(user.id)}
                inputProps={{ "aria-labelledby": labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${user.user.displayName}`}
                  src={user.user.photoURL}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={user.user.displayName} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default SelectableUsers;
