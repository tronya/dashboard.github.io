import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
} from "@mui/material";
import { FC } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { HeaderDrawer } from "../HeaderDrawer/headerDrawer";

interface SidebarProps {
  toggleDrawer: () => void;
  open: boolean;
}

const menuItems = (
  <Box>
    <ListSubheader inset sx={{ color: "white" }}>
      Saved reports
    </ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Current month" sx={{ color: "white" }} />
    </ListItem>
  </Box>
);

const Sidebar: FC<SidebarProps> = ({ toggleDrawer, open }) => {
  return (
    <HeaderDrawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>{menuItems}</List>
    </HeaderDrawer>
  );
};

export default Sidebar;
