import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Wrapper from "./components/ui/Wrapper/wrapper";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
};

export default MyApp;
