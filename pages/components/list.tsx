import {
  ListItem,
  List,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import React, { Fragment } from "react";

export const ListWrapper = () => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSEfVhI9DKtiz5bIZEFXNpri8cGXKrxrdqDQ&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp 2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_m3qZs0HfgSZxuCfsT8WgJPhq31FXOklxtw&usqp=CAU" />
        </ListItemAvatar>
        
        <ListItemText
          primary="Brunch this weekend?w as das das d"
          secondary={
            <Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" asd as d— I'll be in your neighborhood doing errands this…"}
            </Fragment>
          }
        />
      </ListItem>
    </List>
  );
};
