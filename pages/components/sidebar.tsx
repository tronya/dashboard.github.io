import { Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Toolbar } from "@mui/material";
import React, { FC } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Drawer } from "./drawer";

interface SidebarProps {
  toggleDrawer: () => void;
  open: boolean;
}

const menuItems = (
    <div>
      <ListSubheader inset>Saved reports</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItem>
    </div>
  );

export const Sidebar: FC<SidebarProps> = ({ toggleDrawer, open }) => {
    console.log(open)
  return (
    <Drawer variant="permanent" open={open}>
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
    </Drawer>
  );
};
