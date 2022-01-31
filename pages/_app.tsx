import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../src/i18n/config";
import Wrapper from "../src/components/ui/Wrapper/wrapper";
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

import { fireBaseConfig } from "../src/firebase-config";
import { useEffect } from "react";

initializeApp(fireBaseConfig);

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect( () => {
    console.log(getAuth().currentUser)
  })
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
};

export default MyApp;
