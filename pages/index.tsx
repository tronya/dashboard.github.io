import type { NextPage } from "next";
import Head from "next/head";
import { toast } from "react-toastify";
import { Grid } from "@mui/material";
import UsersListContainer from "../src/components/containers/UsersList/usersList.container";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../src/components/ui/Loader/loader";
import Wrapper from "../src/components/ui/Wrapper/wrapper";
import { useAuth } from "../src/hooks/useUser";
import { getUsers } from "./api/users";
import MapBoxContainer from "../src/components/containers/Map/mapBox.container";
import { User } from "../src/models/user.model";

const Home: NextPage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers()
      .then((result) => setUsers(result))
      .catch((error) => toast.error(error));
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (!user || !users.length) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <Head>
        <title>whereiam</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid container>
          <Grid item xs={12} sm={3} lg={3}>
            <UsersListContainer users={users} />
          </Grid>

          <Grid item xs={12} sm={9} lg={9}>
            <MapBoxContainer />
          </Grid>
        </Grid>
      </main>
    </Wrapper>
  );
};

export default Home;
