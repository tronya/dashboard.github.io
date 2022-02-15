import {
  Box,
  Divider,
  Drawer as DrawerComponent,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useRouter } from 'next/router';
import { FC, KeyboardEvent, MouseEvent, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { AnchorType } from '../../../constants';
import { DrawerListItem } from './drawerList';

interface DrawerProps {
  open: boolean;
  toggleDrawer: (
    open: boolean,
    anchor: AnchorType
  ) => (event: KeyboardEvent | MouseEvent) => null | undefined;
  anchor: AnchorType;
  signOutButton?: ReactNode;
  drawerList: DrawerListItem[];
}

const Drawer: FC<DrawerProps> = ({
  open,
  toggleDrawer,
  anchor,
  signOutButton,
  drawerList,
}) => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    router.push(href);
  };

  return (
    <DrawerComponent
      anchor={anchor}
      open={open}
      onClose={toggleDrawer(false, anchor)}
    >
      <Box
        width={250}
        height="100%"
        role="presentation"
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        onClick={toggleDrawer(false, anchor)}
        onKeyDown={toggleDrawer(false, anchor)}
      >
        <Box pt={8}>
          {drawerList.map((element) => (
            <ListItem
              button
              href={element.href}
              onClick={(event) => handleClick(event, element.href)}
              key={element.text}
            >
              <ListItemIcon>{element.icon}</ListItemIcon>
              <ListItemText
                primary={t(element.text)}
                sx={{ color: 'common.white' }}
              />
            </ListItem>
          ))}
          <Divider />
        </Box>
        {signOutButton}
      </Box>
    </DrawerComponent>
  );
};

export default Drawer;
