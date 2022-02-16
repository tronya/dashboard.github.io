import { Box, styled } from '@mui/material';

export const SplashScreenText = styled('span')(({ theme }) => ({
  fontSize: '4rem',
  fontWeight: 900,
  lineHeight: '.8',
  flexDirection: 'column',
  textAlign: 'center',
  color: theme.palette.primary.contrastText,
  display: 'block',
  [theme.breakpoints.up('md')]: {
    fontSize: '6rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '8rem',
  },
}));

export const SplashScreenWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  flexWrap: 'wrap',
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'end',
  justifyContent: 'flex-end',
  paddingRight: '2rem',
}));

export const MirroredFadeInBlock = styled(SplashScreenText)(({ theme }) => ({
  transform: 'rotateX(145deg)',
  '&:after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    background:
      'linear-gradient(0deg, rgba(0,0,0,.5) 20%, rgba(0,0,0,.9) 35%,rgba(0,0,0,1) 50%)',
    bottom: '0rem',
    [theme.breakpoints.up('md')]: {
      bottom: '0rem',
    },
  },
}));
