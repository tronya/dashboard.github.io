import type { NextPage } from "next";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Head from "next/head";
import Box from "@mui/material/Box";
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { ListWrapper } from "../src/components/ui/ListWrapper/list";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        Hello!
        <Grid container spacing={2}>
          <Grid item>
            <ListWrapper />
          </Grid>
          <Grid item>
            {/* this block should be removed */}
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Work" secondary="Jan 7, 2014" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Vacation" secondary="July 20, 2014" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ width: "100%", maxWidth: 500 }}>
              <Typography variant="h1" component="div" gutterBottom>
                h1. Heading
              </Typography>
              <Typography variant="h2" gutterBottom component="div">
                h2. Heading
              </Typography>
              <Typography variant="h3" gutterBottom component="div">
                h3. Heading
              </Typography>
              <Typography variant="h4" gutterBottom component="div">
                h4. Heading
              </Typography>
              <Typography variant="h5" gutterBottom component="div">
                h5. Heading
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                h6. Heading
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Quos blanditiis tenetur
              </Typography>
              <Typography variant="subtitle2" gutterBottom component="div">
                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Quos blanditiis tenetur
              </Typography>
              <Typography variant="body1" gutterBottom>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <Typography variant="body2" gutterBottom>
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <Typography variant="button" display="block" gutterBottom>
                button text
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                caption text
              </Typography>
              <Typography variant="overline" display="block" gutterBottom>
                overline text
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default Home;
