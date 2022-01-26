import { Avatar, Badge, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import React, { FC } from "react";
import { AppBar } from "./appBar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { any } from "prop-types";

interface HeaderProps {
  toggleDrawer: () => void;
  open: boolean;
}

export const Header: FC<HeaderProps> = ({ toggleDrawer, open }) => {
  return (
    <AppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Dashboard
        </Typography>
        <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/146/146005.png" />
              </IconButton>
            </Tooltip>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
