import { Box, Button, Drawer as DrawerComponent } from '@mui/material';
import { toast } from 'react-toastify';
import { getAuth, signOut } from 'firebase/auth';
import { FC, KeyboardEvent, MouseEvent } from 'react';
import DrawerList from './drawerList';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

interface DrawerProps {
  open: boolean;
  toggleUserDrawer: (
    open: boolean
  ) => (event: KeyboardEvent | MouseEvent) => null | undefined;
}

const Drawer: FC<DrawerProps> = ({ open, toggleUserDrawer }) => {
  const auth = getAuth();
  const router = useRouter();
  const { t } = useTranslation();

  const handleSignOut = () =>
    signOut(auth)
      .then(() => {
        toast.success(t('toastSuccess.logOut'));
        router.push('/login');
      })
      .catch((error) => toast.error(`Error: ${error}`));

  return (
    <DrawerComponent
      anchor="right"
      open={open}
      onClose={toggleUserDrawer(false)}
    >
      <Box
        width={250}
        height="100%"
        role="presentation"
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        onClick={toggleUserDrawer(false)}
        onKeyDown={toggleUserDrawer(false)}
      >
        <DrawerList />
        <Box p={2} display="flex" justifyContent="center">
          <Button onClick={handleSignOut} variant="contained" size="large">
            {t('drawer.signOutButtonText')}
          </Button>
        </Box>
      </Box>
    </DrawerComponent>
  );
};

export default Drawer;
