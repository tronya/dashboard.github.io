import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Divider,
} from '@mui/material';
import { FC, FormEvent, ReactNode } from 'react';
import theme from '../../theme';

interface LogInPageProps {
  onSignIn: (
    provider: 'google' | 'email',
    event?: FormEvent<HTMLFormElement>
  ) => void;
  copyright?: ReactNode;
  googleLogInButton?: ReactNode;
}

const LogInPage: FC<LogInPageProps> = ({
  copyright,
  onSignIn,
  googleLogInButton,
}) => (
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
          onSubmit={(event: FormEvent<HTMLFormElement>) =>
            onSignIn('email', event)
          }
          sx={{ mt: 1 }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            disabled
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            disabled
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
            disabled
          >
            Log In
          </Button>
          <Grid container>
            <Box width={1} display="flex" justifyContent="flex-end">
              <Link component="button" href="#" variant="body2" disabled>
                Forgot password?
              </Link>
            </Box>
          </Grid>
          <Box width={1} m={5}>
            <Divider>
              <Typography>OR</Typography>
            </Divider>
          </Box>
          {googleLogInButton}
        </Box>
        {copyright}
      </Box>
    </Grid>
  </Grid>
);

export default LogInPage;
