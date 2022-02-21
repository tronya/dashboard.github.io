import { Container, ThemeProvider, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { FC } from 'react';
import Header from '../Header/header';
import theme from '../../theme';

const Wrapper: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: '100vh',
        }}
      >
        <Toolbar />
        <Container maxWidth="xl" sx={{ mt: 2, mb: 2 }}>
          {children}
        </Container>
      </Box>
    </Box>
  </ThemeProvider>
);

export default Wrapper;
