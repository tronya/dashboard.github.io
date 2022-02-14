import { FC } from 'react';
import UserProfile from '../../src/components/containers/User/userProfile';
import Wrapper from '../../src/components/ui/Wrapper/wrapper';

const UserProfilePage: FC = () => {
  return (
    <Wrapper>
      <UserProfile />
    </Wrapper>
  );
};

export default UserProfilePage;
