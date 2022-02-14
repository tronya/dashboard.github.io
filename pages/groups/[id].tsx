import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import MapBoxContainer from '../../src/components/containers/Map/mapBox.container';
import UsersListGroup from '../../src/components/containers/UsersList/usersListGroup';
import Breadcrumbs from '../../src/components/ui/Breadcrumbs/breadcrumbs';
import Loader from '../../src/components/ui/Loader/loader';
import PageTitle from '../../src/components/ui/PageTitle/PageTitle';
import Wrapper from '../../src/components/ui/Wrapper/wrapper';
import useUsersGeolocation from '../../src/hooks/useUsersGeolocation';
import useUsersMarkers from '../../src/hooks/useUsersMarkers';
import { Group } from '../../src/models/groups.model';
import { UserGeolocation } from '../../src/models/usersGeolocation';
import { isNotNullable } from '../../src/utils/common';
import { getGroups } from '../api/group';
import { useAuth } from '../../src/hooks/useAuth';

const GroupDetailsPage: FC = () => {
  const [groups, setGroup] = useState<Group[]>([]);
  const [currentGroup, setCurrentGroup] = useState<Group>();
  const [selectedUser, setSelectedUser] = useState<UserGeolocation | null>(
    null
  );
  const [groupUsers, setGroupUsers] = useState<UserGeolocation[]>([]);

  const router = useRouter();
  const { user } = useAuth();
  const { t } = useTranslation();
  const { id } = router.query;
  const usersGeolocation = useUsersGeolocation();

  const markers = useUsersMarkers(groupUsers);

  useEffect(() => {
    getGroups(user?.uid)
      .then((groups) => setGroup(groups))
      .catch((error) => toast.error('Something wrong happened', error));
  }, []);

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
    <Wrapper>
      <Breadcrumbs
        breadcrumbText={t('group.groups')}
        otherBreadcrumbs={[
          <Typography key="group-detail" color="text.primary">
            {t('group.groupDetails')}
          </Typography>,
        ]}
        breadcrumbTextHref="/groups"
      />
      <PageTitle title={`${t('group.groupDetails')}: ${currentGroup.name}`} />
      <Box display="flex" p={1}>
        <UsersListGroup users={groupUsers} onUserClick={handleUserClick} />
      </Box>
      <MapBoxContainer markers={markers} selectedUser={selectedUser} />
    </Wrapper>
  );
};

export default GroupDetailsPage;
