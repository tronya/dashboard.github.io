import {
  Avatar,
  Badge,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { FC } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar } from "../AppBar/appBar";
import Localization from "../Localization/localization";
import "../../../i18n/config";
import { useTranslation } from "react-i18next";
import { withTranslation } from "react-i18next";

interface HeaderProps {
  toggleDrawer: () => void;
  open: boolean;
}

const Header: FC<HeaderProps> = ({ toggleDrawer, open }) => {
  const { i18n, t } = useTranslation();
  const changeLanguage = (event: any) => {
    console.log(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

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
          {t("dashboard")}
        </Typography>
        <Localization />
        <button onClick={changeLanguage} value="en">
          En
        </button>
        <br />
        <button onClick={changeLanguage} value="ua">
          Ua
        </button>
        <Tooltip title="Open settings">
          <IconButton sx={{ p: 0 }}>
            <Avatar
              alt="Remy Sharp"
              src="https://cdn-icons-png.flaticon.com/512/146/146005.png"
            />
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

export default Header;
