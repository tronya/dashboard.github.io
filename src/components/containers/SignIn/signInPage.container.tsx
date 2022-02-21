import { createElement, FC, FormEvent } from 'react';
import Copyright from '../../ui/Copyright/copyright';
import GoogleLogInButton from '../../ui/GoogleLogInButton/googleLogInButton';
import SignInPage from './signInPage.component';

interface SignInPageContainerProps {
  onSignUp: (email: string, password: string) => void;
}

const SignInPageContainer: FC<SignInPageContainerProps> = ({ onSignUp }) => {
  return createElement(SignInPage, {
    copyright: <Copyright />,
    onSignUp,
  });
};

export default SignInPageContainer;
