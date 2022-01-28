import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../src/i18n/config";
import Wrapper from "../src/components/ui/Wrapper/wrapper";
import { useEffect } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  // signInWithRedirect,
} from "firebase/auth";
import app from "../firebase";

const auth = getAuth(app);
const provider = new GoogleAuthProvider(); //.credential(process.env.NEXT_PUBLIC_FIREBASE_GOOGLE_CLIENT_ID);

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
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
  }, []);

  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
};

export default MyApp;
