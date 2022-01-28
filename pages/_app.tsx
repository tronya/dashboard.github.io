import "../styles/globals.css";
import type { AppProps } from "next/app";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../src/i18n/config";
import useUser from "../src/hooks/useUser";
import { UserContext } from "../src/components/user";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import app from "../firebase";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const currentUser = useUser();

  useEffect(() => {
    if (pageProps.protected && !currentUser) {
      toast.error("Something went wrong...");
      router.push("/login");
    }
  }, [currentUser, pageProps.protected, router]);

  return (
    <UserContext.Provider value={currentUser}>
      <Component {...pageProps} />
      <ToastContainer />
    </UserContext.Provider>
  );
};

export default MyApp;
