import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../src/i18n/config";
import { AuthUserProvider } from "../src/hooks/useUser";
import { fireBaseConfig } from "../src/firebase";
import { initializeApp, getApps, getApp } from "firebase/app";
import { writeUserData } from "../src/hooks/useNavigation";
import { useEffect } from "react";

// initializeApp(fireBaseConfig);
getApps().length === 0 ? initializeApp(fireBaseConfig) : getApp();

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    writeUserData(334234, { name: "andriy" });
  }, []);
  return (
    <AuthUserProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </AuthUserProvider>
  );
};

export default MyApp;
