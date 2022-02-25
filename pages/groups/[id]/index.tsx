import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import MapBoxContainer from '../../../src/components/containers/Map/mapBox.container';
import UsersListGroup from '../../../src/components/containers/UsersList/usersListGroup';
import Loader from '../../../src/components/ui/Loader/loader';
import useUsersGeolocation from '../../../src/hooks/useUsersGeolocation';
import useUsersMarkers from '../../../src/hooks/useUsersMarkers';
import { Group } from '../../../src/models/groups.model';
import { UserGeolocation } from '../../../src/models/usersGeolocation';
import { isNotNullable } from '../../../src/utils/common';
import { getGroups } from '../../api/group';
import { useAuth } from '../../../src/hooks/useAuth';
import {
  MapHolder,
  MapHolderFooter,
} from '../../../src/components/containers/Map/mapBox.styled';
import GroupWrapper from './groupWrapper';
import { Box, Button } from '@mui/material';

const GroupDetailsPage: FC = () => {
  const [groups, setGroup] = useState<Group[]>([]);
  const [currentGroup, setCurrentGroup] = useState<Group>();
  const [selectedUser, setSelectedUser] = useState<UserGeolocation | null>(
    null
  );
  const [groupUsers, setGroupUsers] = useState<UserGeolocation[]>([]);

  const router = useRouter();
  const { user } = useAuth();
  const { id } = router.query;
  const usersGeolocation = useUsersGeolocation();

  const markers = useUsersMarkers(groupUsers);

  useEffect(() => {
    getGroups(user?.uid)
      .then((groups) => setGroup(groups))
      .catch((error) => toast.error('Something wrong happened', error));
  }, [user?.uid]);

  useEffect(() => {
    const foundGroup = groups.find((group) => group.id === id);
    setCurrentGroup(foundGroup);
  }, [groups, id]);

  useEffect(() => {
    const foundUsers = currentGroup?.users
      .map((id) => {
        const foundUser = usersGeolocation.find((user) => user.uid === id);
        return foundUser;
      })
      .filter(isNotNullable);
    if (foundUsers) {
      setGroupUsers(foundUsers);
    }
  }, [currentGroup, usersGeolocation]);

  if (!currentGroup) {
    return <Loader />;
  }

  const handleUserClick = (user: UserGeolocation) => setSelectedUser(user);

  return (
    <GroupWrapper currentGroup={currentGroup}>
      <Box py={2}>
        <Button
          variant="outlined"
          sx={{ color: 'white' }}
          onClick={() => router.push(`${id}/chat`)}
        >
          Group Chat
        </Button>
      </Box>
      <MapHolder>
        <MapBoxContainer markers={markers} selectedUser={selectedUser} />
        <MapHolderFooter>
          <UsersListGroup users={groupUsers} onUserClick={handleUserClick} />
        </MapHolderFooter>
      </MapHolder>
    </GroupWrapper>
  );
};

export default GroupDetailsPage;
