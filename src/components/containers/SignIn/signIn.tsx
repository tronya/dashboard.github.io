import { createElement, FC } from 'react';
import AuthForm from '../../ui/AuthForm/authForm';

interface SignInPageProps {
  onSignIn: (
    provider: 'google' | 'email',
    data?: {
      email: string;
      password: string;
    }
  ) => void;
}

const SignInPage: FC<SignInPageProps> = ({ onSignIn }) =>
  createElement(AuthForm, {
    onAuthUser: onSignIn,
    title: 'Sign In',
    switchPagesHref: '/sign-up',
    switchPagesTitle: `Don't have an account? Sign Up`,
    isSignInPage: true,
  });

export default SignInPage;
