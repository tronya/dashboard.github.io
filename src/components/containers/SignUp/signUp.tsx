import { createElement, FC } from 'react';
import AuthForm from '../../ui/AuthForm/authForm';
interface SignInPageProps {
  onSignUp: (
    provider: 'email' | 'google',
    data?: { email: string; password: string }
  ) => void;
}

const SignInPage: FC<SignInPageProps> = ({ onSignUp }) =>
  createElement(AuthForm, {
    onAuthUser: onSignUp,
    title: 'Sign Up',
    switchPagesHref: '/sign-in',
    switchPagesTitle: 'Already have an account? Sign In',
  });

export default SignInPage;
