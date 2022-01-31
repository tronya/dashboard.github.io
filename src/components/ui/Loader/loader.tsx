import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import theme from "../../theme";

const Loader = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    width="100%"
    height="100vh"
  >
    <CircularProgress size={100} sx={{ color: theme.palette.primary.main }} />
  </Box>
);

export default Loader;
