import { Box, Button, Grid } from '@mui/material';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { GroupsList } from '../../src/components/containers/GroupsList/GroupsList';
import Breadcrumbs from '../../src/components/ui/Breadcrumbs/breadcrumbs';
import PageTitle from '../../src/components/ui/PageTitle/PageTitle';
import Wrapper from '../../src/components/ui/Wrapper/wrapper';
import { useAuth } from '../../src/hooks/useAuth';
import { Group } from '../../src/models/groups.model';
import { getGroups } from '../api/group';

const GroupsPage: FC = () => {
  const [groups, setGroup] = useState<Group[]>([]);

  const { user } = useAuth();
  const { t } = useTranslation();

  useEffect(() => {
    getGroups(user?.uid)
      .then((groups) => setGroup(groups))
      .catch((error) => toast.error('Something wrong happened', error));
  }, [user?.uid]);

  const sortedGroups = groups.sort((a, b) =>
    b.userCreate === user?.uid ? 1 : a.userCreate === user?.uid ? -1 : 0
  );

  return (
    <Wrapper>
      <Breadcrumbs breadcrumbText={t('group.groups')} />
      <PageTitle title={t('group.groups')} />
      <Grid container justifyContent="center" sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              mt: 2,
              mb: 2,
            }}
          >
            <Link href="/groups/create" passHref>
              <Button variant="outlined" sx={{ color: 'white' }}>
                {t('group.groupsCreate')}
              </Button>
            </Link>
          </Box>
          <GroupsList groups={sortedGroups} currentUser={user} />
        </Grid>
      </Grid>
    </Wrapper>
  );
};
export default GroupsPage;
