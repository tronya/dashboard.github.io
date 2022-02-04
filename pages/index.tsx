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
import MapBoxContainer from "../src/components/containers/Map/mapBox.container";
import useMarkers from "../src/hooks/useMarkers";
import { getGeolocation } from "./api/geolocation";
import { Geolocation } from "../src/models/geolocation.model";
import Banner from "../src/components/ui/Banner/banner";
import useCurrentUserGeolocation from "../src/hooks/useCurrentUserGeolocation";
import { useTranslation } from "react-i18next";

const Home: NextPage = () => {
  const [map, setMap] = useState<mapboxgl.Map>();
  const [geolocation, setGeolocation] = useState<Geolocation[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Geolocation | null>(
    null
  );

  const router = useRouter();
  const markers = useMarkers(map);
  const { t } = useTranslation();
  const { user, loading } = useAuth();
  const currentUserGeolocation = useCurrentUserGeolocation();

  useEffect(() => {
    getGeolocation()
      .then((result) => setGeolocation(result))
      .catch((error) => toast.error(error));
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (!user || !geolocation.length) {
    return <Loader />;
  }

  const handleUserClick = (location: Geolocation) =>
    setSelectedLocation(location);

  const showBanner = !currentUserGeolocation?.geolocationCoords.allowLocation;

  return (
    <Wrapper>
      <Head>
        <title>whereiam</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {showBanner ? (
          <Banner
            title={t("dashboard.bannerTitle")}
            buttonText={t("dashboard.bannerButtonText")}
            buttonHref="/user/profile"
          />
        ) : (
          <Grid container>
            <Grid item xs={12} sm={6} lg={3}>
              <UsersListContainer
                geolocation={geolocation}
                onUserClick={handleUserClick}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={9}>
              <MapBoxContainer
                markers={markers}
                map={map}
                onSetMap={setMap}
                selectedLocation={selectedLocation}
              />
            </Grid>
          </Grid>
        )}
      </main>
    </Wrapper>
  );
};

export default Home;
