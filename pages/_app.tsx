import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Wrapper from "./components/wrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;
