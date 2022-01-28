import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loader = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    width="100%"
    height="100vh"
  >
    <CircularProgress size={100} />
  </Box>
);

export default Loader;
