import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../src/i18n/config';
import { AuthUserProvider } from '../src/hooks/useAuth';
import fireBaseConfig from '../src/firebase';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { GeolocationProvider } from '../src/hooks/useGeolocationProvider';

getApps().length === 0 ? initializeApp(fireBaseConfig) : getApp();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthUserProvider>
      <GeolocationProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </GeolocationProvider>
    </AuthUserProvider>
  );
};

export default MyApp;
