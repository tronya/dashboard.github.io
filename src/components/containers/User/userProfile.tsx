import { Avatar, Box, Button, Paper, Typography } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../../hooks/useAuth'
import Breadcrumbs from '../../ui/Breadcrumbs/breadcrumbs'
import PageTitle from '../../ui/PageTitle/PageTitle'
import { stringAvatar } from '../../../utils/user'
import Loader from '../../ui/Loader/loader'
import { toast } from 'react-toastify'
import { useGeolocationProvider } from '../../../hooks/useGeolocationProvider'

const UserProfile: FC = () => {
  const { t } = useTranslation()
  const { user, loading } = useAuth()
  const { isLocationAllowed } = useGeolocationProvider()
  if (!user) {
    return null
  }
  if (loading) {
    return <Loader />
  }
  const setAcceptLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        console.log(success)
        //TODO some  callback should be to retrigger User (success.onchange)
      },
      (e) => {
        toast.error(e.message)
      }
    )
  }

  return (
    <>
      <Breadcrumbs breadcrumbText={t('profile.title')} />
      <PageTitle title={t('profile.title')} />
      <Paper>
        <Box display="flex" flexDirection="column" p={6} alignItems="center">
          {user.displayName && user.photoURL && (
            <Avatar
              alt={user.displayName}
              src={user.photoURL}
              {...(stringAvatar(user.displayName), { width: 120, height: 120 })}
            />
          )}
          <Box display="flex" flexDirection="column" alignItems="center" mt={6}>
            <Typography variant="h6" sx={{ color: 'common.white' }}>
              {user.displayName}
            </Typography>
            <Typography variant="h6" sx={{ color: 'common.white' }}>
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
              color: 'common.white',
              backgroundColor: 'green !important',
            }}
            onClick={() => setAcceptLocation()}
          >
            {t('profile.allowLocationButtonText')}
          </Button>
        </Box>
      )}
    </>
  )
}

export default UserProfile
