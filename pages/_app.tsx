import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../src/i18n/config";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase";
import { AuthUserProvider } from "../src/hooks/useUser";

initializeApp(firebaseConfig);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthUserProvider >
      <Component {...pageProps} />
      <ToastContainer />
    </AuthUserProvider>
  );
};

export default MyApp;
