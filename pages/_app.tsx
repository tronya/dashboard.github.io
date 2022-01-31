import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../src/i18n/config";
import Wrapper from "../src/components/ui/Wrapper/wrapper";
import { useNavigation } from "../src/components/navigation/useNavigation";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const navigation = useNavigation();
  console.log(navigation)
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
};

export default MyApp;
