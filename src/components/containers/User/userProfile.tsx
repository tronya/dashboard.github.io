import { Avatar, Box, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../../hooks/useUser";
import Breadcrumbs from "../../ui/Breadcrumbs/breadcrumbs";

const UserProfile = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <>
      <Breadcrumbs breadcrumbText={t("profile")} />
      <Box py={2}>
        <Typography variant="h4">{t("profile")}</Typography>
      </Box>
      <Paper sx={{ mt: 2 }}>
        <Box display="flex" flexDirection="column" p={6} alignItems="center">
          {user.displayName && user.photoURL && (
            <Avatar
              alt={user.displayName}
              src={user.photoURL}
              sx={{ width: 120, height: 120 }}
            />
          )}
          <Box display="flex" flexDirection="column" alignItems="center" mt={6}>
            <Typography variant="h6" sx={{ color: "white" }}>
              {user.displayName}
            </Typography>
            <Typography variant="h6" sx={{ color: "white" }}>
              {user.email}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default UserProfile;
