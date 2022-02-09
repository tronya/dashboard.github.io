import { Box, Typography, Paper } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../ui/Breadcrumbs/breadcrumbs";
import { UsersList } from "../UsersList/usersList.component";
import { Geolocation } from "../../../models/geolocation.model";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { orange } from "@mui/material/colors";
import { User } from "../../../models/user.model";

interface FavoritesProps {
  users: User[];
  onUserClick: (user: User) => void;
  favorites: string[];
}

const Favorites: FC<FavoritesProps> = ({ users, onUserClick, favorites }) => {
  const { t } = useTranslation();

  const renderStarIcon = (id: string) =>
    favorites?.find((el) => el === id) ? (
      <StarIcon sx={{ color: orange[500] }} />
    ) : (
      <StarBorderIcon sx={{ color: "white" }} />
    );

  return (
    <>
      <Breadcrumbs breadcrumbText={t("favorites.title")} />
      <Box py={2}>
        <Typography variant="h4">{t("favorites.title")}</Typography>
      </Box>
      <Paper>
        <UsersList
          users={users}
          onUserClick={onUserClick}
          starIcon={renderStarIcon}
        />
      </Paper>
    </>
  );
};

export default Favorites;
