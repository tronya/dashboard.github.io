import type { NextPage } from "next";
import Head from "next/head";
import { Grid, Paper } from "@mui/material";
import { ListWrapper } from "../src/components/ui/ListWrapper/list";
import MapBox from "../src/components/ui/Map/MapBox";
import Wrapper from "../src/components/ui/Wrapper/wrapper";
import useUser from "../src/hooks/useUser";
import Loader from "../src/components/ui/Loader/loader";
import { useEffect } from "react";
import { User } from "firebase/auth";

const Home: NextPage = () => {
  const currentUser = useUser();

  if (!currentUser) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid container spacing={2}>
          <Grid item>
            <ListWrapper />
          </Grid>

          <Grid item xs={12} sm={6} lg={9}>
            <Paper sx={{ height: 600 }}>
              <MapBox />
            </Paper>
          </Grid>
        </Grid>
      </main>
    </Wrapper>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      protected: true,
    },
  };
};

export default Home;
