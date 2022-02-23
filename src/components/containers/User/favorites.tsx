import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../../ui/Breadcrumbs/breadcrumbs';
import { UsersList } from '../UsersList/usersList.component';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { orange } from '@mui/material/colors';
import { UserGeolocation } from '../../../models/usersGeolocation';

interface FavoritesProps {
  users: UserGeolocation[];
  onUserClick: (user: UserGeolocation) => void;
  favorites: string[];
}

const Favorites: FC<FavoritesProps> = ({ users, onUserClick, favorites }) => {
  const { t } = useTranslation();

  const renderStarIcon = (id?: string) =>
    favorites?.find((el) => el === id) ? (
      <StarIcon sx={{ color: orange[500] }} />
    ) : (
      <StarBorderIcon sx={{ color: 'white' }} />
    );

  return (
    <>
      <Breadcrumbs breadcrumbText={t('favorites.title')} />
      <Box py={2}>
        <Typography variant="h4">{t('favorites.title')}</Typography>
      </Box>
      <UsersList
        users={users}
        onUserClick={onUserClick}
        starIcon={renderStarIcon}
      />
    </>
  );
};

export default Favorites;
