import { toast } from "react-toastify";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import LogInPageContainer from "../src/components/containers/LogIn/logInPage.container";
import { FormEvent } from "react";
import { useTranslation } from "react-i18next";

const Login = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();
  const { t } = useTranslation();

  const handleSignIn = (
    provider: "google" | "email",
    event?: FormEvent<HTMLFormElement>
  ) => {
    switch (provider) {
      case "google":
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            if (credential?.accessToken) {
              window.localStorage.setItem(
                "accessToken",
                credential.accessToken
              );
            }
            toast.success(t("toastSuccess.logIn"));
            router.push("/");
          })
          .catch((error) => toast.error(error.message));
        break;
      case "email":
        event?.preventDefault();
        const data = new FormData(event?.currentTarget);
        console.log({
          email: data.get("email"),
          password: data.get("password"),
        });
        break;

      default:
        break;
    }
  };

  return <LogInPageContainer onSignIn={handleSignIn} />;
};

export default Login;
