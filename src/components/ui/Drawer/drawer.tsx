import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer as DrawerComponent,
} from "@mui/material";
import app from "../../../../firebase";
import { useRouter } from "next/router";
import { getAuth, signOut } from "firebase/auth";
import { FC, KeyboardEvent, MouseEvent } from "react";

interface DrawerProps {
  open: boolean;
  toggleUserDrawer: (
    open: boolean
  ) => (event: KeyboardEvent | MouseEvent) => null | undefined;
}

const Drawer: FC<DrawerProps> = ({ open, toggleUserDrawer }) => {
  const auth = getAuth(app);
  const router = useRouter();

  const handleSignOut = () =>
    signOut(auth)
      .then(() => {
        router.push("/login");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });

  const renderList = () => (
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
      <Box pt={2}>
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>test 1</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>test 2</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
      <Box p={2} display="flex" justifyContent="center">
        <Button onClick={handleSignOut} variant="contained" size="large">
          SIGH OUT
        </Button>
      </Box>
    </Box>
  );

  return (
    <DrawerComponent
      anchor="right"
      open={open}
      onClose={toggleUserDrawer(false)}
    >
      {renderList()}
    </DrawerComponent>
  );
};

export default Drawer;
