import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { FC, MouseEvent } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const DrawerList: FC = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const drawerList = [{ href: "/user/profile", text: t("profile.title") }];

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    router.push(href);
  };

  return (
    <Box pt={8}>
      <List>
        {drawerList.map((element) => (
          <ListItem
            button
            href={element.href}
            onClick={(event) => handleClick(event, element.href)}
            key={element.text}
          >
            <ListItemIcon>
              <PermIdentityIcon sx={{ color: "common.white" }} />
            </ListItemIcon>
            <ListItemText
              primary={element.text}
              sx={{ color: "common.white" }}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
};

export default DrawerList;
