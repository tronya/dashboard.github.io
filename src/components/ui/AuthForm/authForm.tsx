import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Link,
} from '@mui/material';
import { useFormik } from 'formik';
import router from 'next/router';
import { FC } from 'react';
import theme from '../../theme';
import Copyright from '../Copyright/copyright';
import GoogleLogInButton from '../GoogleLogInButton/googleLogInButton';
import { validationSchema } from './validationSchema';

interface AuthFormProps {
  onAuthUser: (
    provider: 'google' | 'email',
    data?: {
      email: string;
      password: string;
    }
  ) => void;
  title: string;
  switchPagesTitle: string;
  switchPagesHref: string;
  isSignInPage?: boolean;
}

const AuthForm: FC<AuthFormProps> = ({
  onAuthUser,
  title,
  switchPagesTitle,
  switchPagesHref,
  isSignInPage,
}) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: ({ email, password }) => onAuthUser('email', { email, password }),
  });

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={5}
        sx={{
          backgroundImage:
            'url(https://www.pngkit.com/png/full/332-3325220_transparent-cat-face-tumblr-download-.png)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: theme.palette.primary.main,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={7} sx={{ height: '100vh' }}>
        <Box
          height="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          py={2}
          px={4}
        >
          <Box width={1} display="flex" justifyContent="flex-end">
            <Link component="button" href="#" variant="body2" disabled>
              Need help?
            </Link>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            width={1}
            alignItems="center"
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{ mt: 1 }}
          >
            <Typography component="h1" variant="h5">
              {title}
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              error={Boolean(formik.errors.email)}
              helperText={formik.errors.email}
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              autoComplete="current-password"
              error={Boolean(formik.errors.password)}
              helperText={formik.errors.password}
            />
            <Button
              type="submit"
              disabled={!(formik.isValid && formik.dirty)}
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              {title}
            </Button>
            <Grid container>
              <Grid item xs>
                {isSignInPage && (
                  <Link component="button" href="#" variant="body2" disabled>
                    Forgot password?
                  </Link>
                )}
              </Grid>
              <Grid item>
                <Link
                  component="button"
                  href="/sign-up"
                  variant="body2"
                  onClick={() => router.push(switchPagesHref)}
                >
                  {switchPagesTitle}
                </Link>
              </Grid>
            </Grid>
            {isSignInPage && (
              <>
                <Box width={1} m={5}>
                  <Divider>
                    <Typography>OR</Typography>
                  </Divider>
                </Box>
                <GoogleLogInButton
                  onSignIn={() => onAuthUser('google')}
                  fullWidth
                />
              </>
            )}
          </Box>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
};

export default AuthForm;
