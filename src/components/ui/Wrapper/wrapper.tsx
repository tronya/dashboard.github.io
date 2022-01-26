import { Container, ThemeProvider, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { FC, useState } from "react";
import Sidebar from "../Sidebar/sidebar";
import Header from "../Header/header";
import theme from "../../theme";

const Wrapper: FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header open={open} toggleDrawer={toggleDrawer} />
        <Sidebar open={open} toggleDrawer={toggleDrawer} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
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
};

export default Wrapper;
