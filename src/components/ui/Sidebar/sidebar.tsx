import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import { FC } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { HeaderDrawer } from '../HeaderDrawer/headerDrawer';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

interface SidebarProps {
  toggleDrawer: () => void;
  open: boolean;
}

const MenuItems: FC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Link href="/groups" passHref>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText
            primary={t('mainMenu.groups')}
            sx={{ color: 'white' }}
          />
        </ListItem>
      </Link>
    </Box>
  );
};

const Sidebar: FC<SidebarProps> = ({ toggleDrawer, open }) => {
  return (
    <HeaderDrawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        <MenuItems />
      </List>
    </HeaderDrawer>
  );
};

export default Sidebar;
