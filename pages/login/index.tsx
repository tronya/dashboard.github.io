import { Box, Button } from "@mui/material";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import app from "../../firebase";
import GoogleLogo from "../../src/components/ui/Icons/GoogleLogo";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider(); //.credential(process.env.NEXT_PUBLIC_FIREBASE_GOOGLE_CLIENT_ID);
  const router = useRouter();

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        router.push("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
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
