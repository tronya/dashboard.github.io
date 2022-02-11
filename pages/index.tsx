import type {NextPage} from "next";
import Head from "next/head";
import {Box, Grid, Tooltip, Typography} from "@mui/material";
import UsersListContainer from "../src/components/containers/UsersList/usersList.container";
import {useRouter} from "next/router";
import {ReactChild, useEffect, useState} from "react";
import Loader from "../src/components/ui/Loader/loader";
import Wrapper from "../src/components/ui/Wrapper/wrapper";
import {useAuth} from "../src/hooks/useAuth";
import MapBoxContainer from "../src/components/containers/Map/mapBox.container";
import useUsersMarkers from "../src/hooks/useUsersMarkers";
import Banner from "../src/components/ui/Banner/banner";
import {useTranslation} from "react-i18next";
import HelpIcon from "@mui/icons-material/Help";
import useUsersGeolocation from "../src/hooks/useUsersGeolocation";
import {UserGeolocation} from "../src/models/usersGeolocation";
import {useGeolocationProvider} from "../src/hooks/useGeolocationProvider";

const Home: NextPage = () => {
    const [selectedUser, setSelectedUser] = useState<UserGeolocation | null>(
        null
    );

    const router = useRouter();
    const {t} = useTranslation();
    const {user, loading} = useAuth();
    const {isLocationAllowed} = useGeolocationProvider()
    const usersGeolocation = useUsersGeolocation();


    const markers = useUsersMarkers(usersGeolocation);

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
    }, [user, loading, router]);

    if (!usersGeolocation) {
        return <Loader/>;
    }

    const handleUserClick = (user: UserGeolocation) => setSelectedUser(user);

    return (
        <Wrapper>
            <Head>
                <title>whereiam</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                {!isLocationAllowed ? (
                    <Banner
                        title={t("dashboard.bannerTitle")}
                        buttonText={t("dashboard.bannerButtonText")}
                        buttonHref="/user/profile"
                    />
                ) : (
                    <Grid container>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Box display="flex" alignItems="center" py={2} mr={2}>
                                <Typography variant="h4">
                                    {t("dashboard.peopleYouFollow")}
                                </Typography>
                                <Tooltip
                                    title={t("dashboard.tooltip") as ReactChild}
                                    placement="top"
                                >
                                    <Box ml={1}>
                                        <HelpIcon sx={{width: 15, height: 15}}/>
                                    </Box>
                                </Tooltip>
                            </Box>
                            <UsersListContainer
                                users={usersGeolocation}
                                onUserClick={handleUserClick}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={9}>
                            <MapBoxContainer markers={markers} selectedUser={selectedUser}/>
                        </Grid>
                    </Grid>
                )}
            </main>
        </Wrapper>
    );
};

export default Home;
