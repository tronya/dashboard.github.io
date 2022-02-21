import SignInPageContainer from '../src/components/containers/SignIn/signInPage.container';
import { FC } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const SignUpPage: FC = () => {
  const auth = getAuth();
  const router = useRouter();

  const handleSignUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          router.push('/login');
        }
      })
      .catch((error) => toast.error(error.message));
  };

  return <SignInPageContainer onSignUp={handleSignUp} />;
};

export default SignUpPage;
