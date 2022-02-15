import {
  Avatar,
  Checkbox,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { FC, useState } from 'react';
import { stringAvatar } from '../../../utils/user';
import useUsersGeolocation from '../../../hooks/useUsersGeolocation';
import { useAuth } from '../../../hooks/useAuth';

interface SelectableUsersProps {
  selectedUsers: (users: string[]) => void;
}

const SelectableUsers: FC<SelectableUsersProps> = ({ selectedUsers }) => {
  const [checked, setChecked] = useState<string[]>([]);
  const users = useUsersGeolocation();
  const authUser = useAuth();

  const handleToggle = (id: string | undefined) => () => {
    if (!id) return;
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
    <List dense sx={{ width: '100%', maxWidth: 360 }}>
      {users.map((user) => {
        const labelId = `checkbox-list-secondary-label-${user.uid}`;
        const currentUser = user.uid === authUser?.user?.uid;
        return (
          <ListItem
            key={user.uid}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(user.uid)}
                disabled={currentUser}
                checked={checked.includes(user.uid ?? '') || currentUser} // TODO: take a loo to this
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${user.displayName}`}
                  src={user.photoURL ?? ''}
                  {...stringAvatar(user.displayName ?? '')}
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
