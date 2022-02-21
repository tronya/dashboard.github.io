import { Grid, Box, Typography, TextField, Button, Link } from '@mui/material';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';
import theme from '../../theme';
import { validationSchema } from './validationSchema';

interface SignInPageProps {
  onSignUp: (email: string, password: string) => void;
  copyright?: ReactNode;
}

const SignInPage: FC<SignInPageProps> = ({ copyright, onSignUp }) => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: ({ email, password }) => onSignUp(email, password),
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
            onSubmit={formik.handleSubmit}
            sx={{ mt: 1 }}
          >
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              label="Email Address"
              name="email"
              id="email"
              autoComplete="email"
              error={Boolean(formik.errors.email)}
              helperText={formik.errors.email}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              id="password"
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  component="button"
                  href="/login"
                  variant="body2"
                  onClick={() => router.push('/login')}
                >
                  Already have an account? Sign In
                </Link>
              </Grid>
            </Grid>
          </Box>
          {copyright}
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignInPage;
