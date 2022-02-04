import {
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { FC, useState, KeyboardEvent, MouseEvent } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar } from "../AppBar/appBar";
import Localization from "../Localization/localization";
import { useTranslation } from "react-i18next";
import Drawer from "../Drawer/drawer";
import { useAuth } from "../../../hooks/useUser";
import { useRouter } from "next/router";

interface HeaderProps {
  toggleDrawer: () => void;
  open: boolean;
}

const Header: FC<HeaderProps> = ({ toggleDrawer, open }) => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const router = useRouter();

  const [openUserDrawer, setOpenUserDrawer] = useState(false);

  const toggleUserDrawer =
    (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return null;
      }

      setOpenUserDrawer(open);
    };

  const handleClick = (event: MouseEvent<HTMLHeadingElement>) => {
    event.preventDefault();
    router.push("/");
  };

  return (
    <>
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
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={handleClick}
          >
            {t("dashboard")}
          </Typography>

          <Box pr={1}>
            <Localization />
          </Box>

          {user && user.displayName && user.photoURL && (
            <Tooltip title="Open settings">
              <IconButton
                sx={{ p: 0 }}
                onClick={() => setOpenUserDrawer((open) => !open)}
              >
                <Avatar alt={user.displayName} src={user.photoURL} />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
      </AppBar>
      <Drawer open={openUserDrawer} toggleUserDrawer={toggleUserDrawer} />
    </>
  );
};

export default Header;
