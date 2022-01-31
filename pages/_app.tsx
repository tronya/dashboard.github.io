import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../src/i18n/config";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { AuthUserProvider } from "../src/hooks/useUser";
import { fireBaseConfig } from "../firebase";

initializeApp(fireBaseConfig);

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    console.log(getAuth().currentUser);
  });

  return (
    <AuthUserProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </AuthUserProvider>
  );
};

export default MyApp;
