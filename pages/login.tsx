import { Box, Button } from "@mui/material";
import { toast } from "react-toastify";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import GoogleLogo from "../src/components/ui/Icons/GoogleLogo";
import app from "../firebase";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider(); //.credential(process.env.NEXT_PUBLIC_FIREBASE_GOOGLE_CLIENT_ID);
  const router = useRouter();

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential?.accessToken) {
          window.localStorage.setItem("accessToken", credential.accessToken);
        }
        toast.success("You successfully log in!");
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // TODO: more useful error message need to be declared here
        toast.error(
          `Error: ${errorCode}, ${errorMessage}, ${email}, ${credential}`
        );
      });
  };

  return (
    <Box
      width={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Button variant="outlined" onClick={handleSignIn}>
        <GoogleLogo />
        <Box pl={1}>Login with Google</Box>
      </Button>
    </Box>
  );
};

export default Login;
