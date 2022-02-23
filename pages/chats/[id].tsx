import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import ChatsPage from '.';
import Chat from '../../src/components/containers/Chats/chat.component';
import ChatContainer from '../../src/components/containers/Chats/chat.container';
import Loader from '../../src/components/ui/Loader/loader';
import useUsersGeolocation from '../../src/hooks/useUsersGeolocation';
import { UserGeolocation } from '../../src/models/usersGeolocation';

const ChatByUserId: FC = () => {
  const [selectedUser, setSelectedUser] = useState<UserGeolocation>();

  const usersGeolocation = useUsersGeolocation();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const foundUser = usersGeolocation.find((user) => user.uid === id);
    setSelectedUser(foundUser);
  }, [id, usersGeolocation]);

  if (!usersGeolocation) {
    return <Loader />;
  }

  return (
    <ChatsPage>
      <ChatContainer selectedUser={selectedUser} />
    </ChatsPage>
  );
};

export default ChatByUserId;
