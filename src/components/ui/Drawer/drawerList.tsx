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

const drawerList = [{ href: "/user/profile", text: "User Profile" }];

const DrawerList: FC = () => {
  const router = useRouter();

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
              <PermIdentityIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary={element.text} sx={{ color: "white" }} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
};

export default DrawerList;
