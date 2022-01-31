import { Box, Button } from "@mui/material";
import { toast } from "react-toastify";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { useRouter } from "next/router";
import GoogleLogo from "../src/components/ui/Icons/GoogleLogo";
import FacebookLogo from "../src/components/ui/Icons/FacebookLogo";
import theme from "../src/components/theme";

const Login = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const router = useRouter();

  const signInWithAuthProvider = (
    provider: FacebookAuthProvider | GoogleAuthProvider
  ) =>
    signInWithPopup(auth, provider)
      .then(() => {
        // TODO: maybe it will be needed in the future
        // const credential = (GoogleAuthProvider || FacebookAuthProvider).credentialFromResult(result);
        toast.success("You successfully log in!");
        router.push("/");
      })
      .catch((error) => toast.error(error.message));

  return (
    <Box
      width={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="100vh"
      bgcolor={theme.palette.primary.main}
    >
      <Box>
        <Button
          variant="outlined"
          onClick={() => signInWithAuthProvider(googleProvider)}
          fullWidth
          sx={{ mb: 2 }}
        >
          <GoogleLogo />
          <Box pl={1}>Login with Google</Box>
        </Button>

        <Button
          variant="outlined"
          onClick={() => signInWithAuthProvider(facebookProvider)}
          fullWidth
        >
          <FacebookLogo />
          <Box pl={1}>Login with Facebook</Box>
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
