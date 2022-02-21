import { toast } from 'react-toastify';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'next/router';
import LogInPageContainer from '../src/components/containers/LogIn/logInPage.container';
import { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();
  const { t } = useTranslation();

  const handleSignIn = (
    provider: 'google' | 'email',
    data?: {
      email: string;
      password: string;
    }
  ) => {
    switch (provider) {
      case 'google':
        signInWithPopup(auth, googleProvider)
          .then(() => {
            toast.success(t('toastSuccess.logIn'));
            router.push('/');
          })
          .catch((error) => toast.error(error.message));
        break;
      case 'email':
        const { email, password } = data!!;
        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            toast.success(t('toastSuccess.logIn'));
            router.push('/');
          })
          .catch((error) => toast.error(error.message));
        break;

      default:
        break;
    }
  };

  return <LogInPageContainer onSignIn={handleSignIn} />;
};

export default Login;
