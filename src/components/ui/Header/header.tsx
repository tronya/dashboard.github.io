import {
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { FC, useState, KeyboardEvent, MouseEvent } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar } from '../AppBar/appBar';
import Localization from '../Localization/localization';
import { useTranslation } from 'react-i18next';
import Drawer from '../Drawer/drawer';
import { useAuth } from '../../../hooks/useAuth';
import { useRouter } from 'next/router';
import { stringAvatar } from '../../../utils/user';
import { getAuth, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { drawerListLeft, drawerListRight } from '../Drawer/drawerList';
import { AnchorType } from '../../../constants';

const Header: FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const router = useRouter();
  const auth = getAuth();

  const [openDrawerState, setOpenDrawerState] = useState({
    left: false,
    right: false,
  });

  const toggleDrawer =
    (open: boolean, anchor: AnchorType) =>
    (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')
      ) {
        return null;
      }

      setOpenDrawerState({
        ...openDrawerState,
        [anchor]: open,
      });
    };

  const handleClick = (event: MouseEvent<HTMLHeadingElement>) => {
    event.preventDefault();
    router.push('/');
  };

  const handleSignOut = () =>
    signOut(auth)
      .then(() => {
        toast.success(t('toastSuccess.logOut'));
        router.push('/login');
      })
      .catch((error) => toast.error(`Error: ${error}`));

  return (
    <>
      <AppBar position="fixed" open={false}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() =>
              setOpenDrawerState((state) => ({
                ...openDrawerState,
                left: !state.left,
              }))
            }
            sx={{
              marginRight: '36px',
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={handleClick}
          >
            {t('dashboard.title')}
          </Typography>

          <Box pr={1}>
            <Localization />
          </Box>

          {user && user.displayName && user.photoURL && (
            <Tooltip title="Open settings">
              <IconButton
                sx={{ p: 0 }}
                onClick={() =>
                  setOpenDrawerState((state) => ({
                    ...openDrawerState,
                    right: !state.right,
                  }))
                }
              >
                <Avatar
                  alt={user.displayName}
                  src={user.photoURL}
                  {...stringAvatar(user.displayName)}
                />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        open={openDrawerState.left}
        toggleDrawer={toggleDrawer}
        anchor={AnchorType.LEFT}
        drawerList={drawerListLeft}
      />
      <Drawer
        open={openDrawerState.right}
        toggleDrawer={toggleDrawer}
        anchor={AnchorType.RIGHT}
        signOutButton={
          <Box p={2} display="flex" justifyContent="center">
            <Button
              onClick={handleSignOut}
              variant="outlined"
              size="large"
              sx={{ color: 'white' }}
            >
              {t('drawer.signOutButtonText')}
            </Button>
          </Box>
        }
        drawerList={drawerListRight}
      />
    </>
  );
};

export default Header;
