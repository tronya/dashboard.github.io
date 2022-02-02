import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../src/i18n/config";
import { initializeApp } from "firebase/app";
import { AuthUserProvider } from "../src/hooks/useUser";
import { fireBaseConfig } from "../src/firebase";
import { NavigationProvider } from "../src/hooks/useNavigation";

initializeApp(fireBaseConfig);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthUserProvider>
      <NavigationProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </NavigationProvider>
    </AuthUserProvider>
  );
};

export default MyApp;
