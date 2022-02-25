import { FC, useRef, useState } from 'react';
import useChats from '../../../hooks/useChats';
import { useAuth } from '../../../hooks/useAuth';
import { toast } from 'react-toastify';
import { removeMessageByKey, setChats } from '../../../../pages/api/chats';
import Loader from '../../ui/Loader/loader';
import { UserGeolocation } from '../../../models/usersGeolocation';
import Chat from './chat.component';

interface ChatContainerProps {
  selectedUser?: UserGeolocation;
}

const ChatContainer: FC<ChatContainerProps> = ({ selectedUser }) => {
  const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null);
  const elementRef = useRef<null | HTMLDivElement>(null);

  const { user } = useAuth();
  const { chats, loadingChats, id } = useChats(selectedUser?.uid, user?.uid);

  const handleRemoveMessage = (key: string | undefined) => {
    if (chats[0].messageId !== key) {
      removeMessageByKey(selectedUser?.uid, user?.uid, id, key).catch((error) =>
        toast.error(error)
      );
    } else {
      toast.error(`You can't remove the last message.`);
    }
    setAnchorEl(null);
  };

  const handleSendMsg = (
    data: {
      content: string;
      timestamp: number;
      uid: string | undefined;
    },
    selectedUserId: string | undefined,
    userId: string | undefined,
    id: string | undefined | null
  ) =>
    setChats(selectedUserId, userId, data, id).catch((error) =>
      toast.error(error)
    );

  if (loadingChats) {
    return <Loader />;
  }

  return (
    <Chat
      onRemoveMessage={handleRemoveMessage}
      anchorEl={anchorEl}
      chats={chats}
      elementRef={elementRef}
      onAnchorEl={setAnchorEl}
      id={id}
      onSendMsg={handleSendMsg}
      selectedUser={selectedUser}
    />
  );
};

export default ChatContainer;
