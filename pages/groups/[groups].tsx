import { Grid, Box, Button } from '@mui/material';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { GroupsList } from '../../src/components/containers/GroupsList/GroupsList';
import Breadcrumbs from '../../src/components/ui/Breadcrumbs/breadcrumbs';
import PageTitle from '../../src/components/ui/PageTitle/PageTitle';
import Wrapper from '../../src/components/ui/Wrapper/wrapper';
import { useAuth } from '../../src/hooks/useAuth';
import { GroupProps } from '../../src/models/groups.model';
import { getGroups } from '../api/group';

const GroupsPage: FC = () => {
  const [groups, setGroup] = useState<GroupProps[]>([]);
  const { user } = useAuth();
  const { t } = useTranslation();

  useEffect(() => {
    getGroups()
      .then((groups) => setGroup(groups))
      .catch((error) => toast.error('Something wrong happened', error));
  }, []);

  return (
    <Wrapper>
      <Breadcrumbs breadcrumbText={t('titles.groups')} />
      <PageTitle title={t('titles.groups')} />
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
                {t('titles.groupsСreate')}
              </Button>
            </Link>
          </Box>
          <GroupsList groups={groups} currentUser={user} />
        </Grid>
      </Grid>
    </Wrapper>
  );
};
export default GroupsPage;
