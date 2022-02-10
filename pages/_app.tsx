import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../src/i18n/config";
import { AuthUserProvider } from "../src/hooks/useUser";
import fireBaseConfig from "../src/firebase";
import { initializeApp } from "firebase/app";

initializeApp(fireBaseConfig);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthUserProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </AuthUserProvider>
  );
};

export default MyApp;
