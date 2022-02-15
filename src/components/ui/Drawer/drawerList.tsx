import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import StarIcon from '@mui/icons-material/Star';

export interface DrawerListItem {
  href: string;
  text: string;
  icon: JSX.Element;
}

export const drawerListRight: DrawerListItem[] = [
  {
    href: '/user/profile',
    text: 'profile.title',
    icon: <PersonIcon sx={{ color: 'common.white' }} />,
  },
  {
    href: '/user/favorites',
    text: 'favorites.title',
    icon: <StarIcon sx={{ color: 'common.white' }} />,
  },
];

export const drawerListLeft: DrawerListItem[] = [
  {
    href: '/groups',
    text: 'mainMenu.groups',
    icon: <GroupIcon sx={{ color: 'common.white' }} />,
  },
];
