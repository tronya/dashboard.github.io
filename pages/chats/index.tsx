import { Grid } from '@mui/material';
import { FC, useState } from 'react';
import { UsersList } from '../../src/components/containers/UsersList/usersList.component';
import Breadcrumbs from '../../src/components/ui/Breadcrumbs/breadcrumbs';
import Loader from '../../src/components/ui/Loader/loader';
import PageTitle from '../../src/components/ui/PageTitle/PageTitle';
import Wrapper from '../../src/components/ui/Wrapper/wrapper';
import { useAuth } from '../../src/hooks/useAuth';
import useUsersGeolocation from '../../src/hooks/useUsersGeolocation';
import { UserGeolocation } from '../../src/models/usersGeolocation';
import Chat from '../../src/components/containers/Chats/chat.component';

const ChatsPage: FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<string>();

  const { user: authUser } = useAuth();
  const usersGeolocation = useUsersGeolocation();

  if (!usersGeolocation || !authUser) {
    return <Loader />;
  }

  const sortedUsers = usersGeolocation
    .filter((user) => authUser.uid !== user.uid)
    .sort((a, b) =>
      a.displayName!! < b.displayName!!
        ? -1
        : b.displayName!! > a.displayName!!
        ? 1
        : 0
    );

  const handleUserClick = (user: UserGeolocation) =>
    setSelectedUserId(user.uid);

  return (
    <Wrapper>
      <Breadcrumbs breadcrumbText="Chats" />
      <PageTitle title="Chats" />
      <Grid container sx={{ mt: 2, height: '75vh' }} spacing={2}>
        <Grid item xs={4} sm={3}>
          <UsersList users={sortedUsers} onUserClick={handleUserClick} />
        </Grid>
        <Grid item xs={8} sm={9}>
          {selectedUserId && <Chat selectedUserId={selectedUserId} />}
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default ChatsPage;
