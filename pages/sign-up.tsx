import SignInPage from '../src/components/containers/SignUp/signUp';
import { FC } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const SignUp: FC = () => {
  const auth = getAuth();
  const router = useRouter();

  const handleSignUp = (
    provider: 'google' | 'email',
    data?: {
      email: string;
      password: string;
    }
  ) => {
    if (provider === 'email') {
      const { email, password } = data!!;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user) {
            router.push('/sign-in');
          }
        })
        .catch((error) => toast.error(error.message));
    }
  };

  return <SignInPage onSignUp={handleSignUp} />;
};

export default SignUp;
