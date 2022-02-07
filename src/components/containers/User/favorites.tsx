import { Box, Typography, Paper } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../ui/Breadcrumbs/breadcrumbs";
import { UsersList } from "../UsersList/usersList.component";
import { Geolocation } from "../../../models/geolocation.model";

interface FavoritesProps {
  geolocation: Geolocation[];
  onUserClick: (location: Geolocation) => void;
  favorites: string[];
}

const Favorites: FC<FavoritesProps> = ({
  geolocation,
  onUserClick,
  favorites,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Breadcrumbs breadcrumbText={t("favorites.title")} />
      <Box py={2}>
        <Typography variant="h4">{t("favorites.title")}</Typography>
      </Box>
      <Paper>
        <UsersList
          geolocation={geolocation}
          onUserClick={onUserClick}
          favorites={favorites}
        />
      </Paper>
    </>
  );
};

export default Favorites;
