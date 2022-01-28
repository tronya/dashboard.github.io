import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../src/i18n/config";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
