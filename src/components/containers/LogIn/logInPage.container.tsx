import { createElement, FC } from 'react';
import Copyright from '../../ui/Copyright/copyright';
import GoogleLogInButton from '../../ui/GoogleLogInButton/googleLogInButton';
import LogInPage from './logInPage.component';

interface LogInPageContainerProps {
  onSignIn: (
    provider: 'google' | 'email',
    data?: {
      email: string;
      password: string;
    }
  ) => void;
}

const LogInPageContainer: FC<LogInPageContainerProps> = ({ onSignIn }) => {
  return createElement(LogInPage, {
    copyright: <Copyright />,
    googleLogInButton: <GoogleLogInButton onSignIn={onSignIn} fullWidth />,
    onSignIn,
  });
};

export default LogInPageContainer;
