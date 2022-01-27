import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../src/i18n/config";
import Wrapper from "../src/components/ui/Wrapper/wrapper";
import { useEffect } from "react";
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { fireBaseConfig } from "../src/firebase-config";
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app: FirebaseApp = initializeApp(fireBaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
      console.log(auth.currentUser);
      const todosCol = collection(db, "Todo");
      console.log(todosCol)

      setDoc(doc(todosCol, "SF"), {
        name: "San Francisco",
        state: "CA",
        country: "USA",
        capital: false,
        population: 860000,
        regions: ["west_coast", "norcal"],
      });

      console.log(todosCol);
  });
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
};

export default MyApp;
