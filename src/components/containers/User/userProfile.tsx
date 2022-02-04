import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import useCurrentUserGeolocation from "../../../hooks/useCurrentUserGeolocation";
import { NavigationProvider } from "../../../hooks/useNavigation";
import { useAuth } from "../../../hooks/useUser";
import Breadcrumbs from "../../ui/Breadcrumbs/breadcrumbs";

const UserProfile: FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { isLocationAllowed } = useCurrentUserGeolocation();

  const [acceptLocation, setAcceptLocation] = useState(false);

  if (!user) {
    return null;
  }

  return (
    <NavigationProvider acceptLocation={acceptLocation}>
      <>
        <Breadcrumbs breadcrumbText={t("profile.title")} />
        <Box py={2}>
          <Typography variant="h4">{t("profile.title")}</Typography>
        </Box>
        <Paper>
          <Box display="flex" flexDirection="column" p={6} alignItems="center">
            {user.displayName && user.photoURL && (
              <Avatar
                alt={user.displayName}
                src={user.photoURL}
                sx={{ width: 120, height: 120 }}
              />
            )}
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt={6}
            >
              <Typography variant="h6" sx={{ color: "common.white" }}>
                {user.displayName}
              </Typography>
              <Typography variant="h6" sx={{ color: "common.white" }}>
                {user.email}
              </Typography>
            </Box>
          </Box>
        </Paper>
        {!isLocationAllowed && (
          <Box width={1} mt={2}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                color: "common.white",
                backgroundColor: "green !important",
              }}
              onClick={() => setAcceptLocation(true)}
            >
              {t("profile.allowLocationButtonText")}
            </Button>
          </Box>
        )}
      </>
    </NavigationProvider>
  );
};

export default UserProfile;
