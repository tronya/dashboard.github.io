import { Button, Box } from "@mui/material";
import { FC } from "react";
import GoogleLogo from "../Icons/GoogleLogo";

interface GoogleLogInButtonProps {
  onSignIn: (provider: "google") => void;
  fullWidth: boolean;
}

const GoogleLogInButton: FC<GoogleLogInButtonProps> = ({
  onSignIn,
  fullWidth,
}) => (
  <Button
    variant="outlined"
    onClick={() => onSignIn("google")}
    fullWidth={fullWidth}
  >
    <GoogleLogo />
    <Box pl={1}>Login with Google</Box>
  </Button>
);

export default GoogleLogInButton;
