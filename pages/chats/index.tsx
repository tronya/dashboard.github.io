import { Grid, Paper } from '@mui/material';
import { FC, ReactNode, useState } from 'react';
import { UsersList } from '../../src/components/containers/UsersList/usersList.component';
import Breadcrumbs from '../../src/components/ui/Breadcrumbs/breadcrumbs';
import Loader from '../../src/components/ui/Loader/loader';
import PageTitle from '../../src/components/ui/PageTitle/PageTitle';
import Wrapper from '../../src/components/ui/Wrapper/wrapper';
import { useAuth } from '../../src/hooks/useAuth';
import useUsersGeolocation from '../../src/hooks/useUsersGeolocation';
import { UserGeolocation } from '../../src/models/usersGeolocation';
import EmptyChat from '../../src/components/containers/Chats/chat.empty';
import { useRouter } from 'next/router';
import SearchInput from '../../src/components/ui/SearchInput/searchInput';
import UsersListGroup from '../../src/components/containers/UsersList/usersListGroup';
import useWindowDimensions from '../../src/hooks/useWindowDimensions';
import { ScreenType } from '../../src/constants';

interface ChatPageProps {
  children?: ReactNode;
}

const ChatsPage: FC<ChatPageProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const { user: authUser } = useAuth();
  const usersGeolocation = useUsersGeolocation();
  const router = useRouter();
  const { screenType } = useWindowDimensions();

  if (!usersGeolocation || !authUser) {
    return <Loader />;
  }

  const users = usersGeolocation
    .filter((user) => authUser.uid !== user.uid)
    .sort((a, b) =>
      a.displayName!! < b.displayName!!
        ? -1
        : b.displayName!! > a.displayName!!
        ? 1
        : 0
    )
    .filter((person) =>
      person.displayName
        ? person.displayName.toLowerCase().includes(searchTerm.toLowerCase())
        : false
    );

  const handleUserClick = (user: UserGeolocation) =>
    router.push(`/chats/${user.uid}`);

  return (
    <Wrapper>
      <Breadcrumbs breadcrumbText="Chats" />
      <PageTitle title="Chats" />
      <Grid container sx={{ mt: 2, height: '75vh' }} spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <SearchInput
            searchTerm={searchTerm}
            onChangeSearchTerm={(searchStr) => setSearchTerm(searchStr)}
          />
          <Paper
            sx={{
              py: 2,
              pl: 2,
              height: screenType === ScreenType.DESKTOP ? 1 : 'unset',
            }}
          >
            {screenType === ScreenType.DESKTOP ? (
              <UsersList users={users} onUserClick={handleUserClick} />
            ) : (
              <UsersListGroup users={users} onUserClick={handleUserClick} />
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          {children ?? <EmptyChat title="No selected chat..." />}
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default ChatsPage;
