import { Avatar, Box } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import ChatMessage from './chatMessage';
import { MessageWrapper } from './chat.styled';
import useChats from '../../../hooks/useChats';
import { useAuth } from '../../../hooks/useAuth';
import { toast } from 'react-toastify';
import { removeMessageByKey } from '../../../../pages/api/chats';
import Loader from '../../ui/Loader/loader';
import EmptyChat from './chat.empty';
import { stringAvatar } from '../../../utils/user';
import { UserGeolocation } from '../../../models/usersGeolocation';
import ChatForm from './chatForm';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { ScreenType } from '../../../constants';

interface ChatProps {
  selectedUser: UserGeolocation | undefined;
}

const Chat: FC<ChatProps> = ({ selectedUser }) => {
  const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null);
  const elementRef = useRef<null | HTMLDivElement>(null);

  const { screenType } = useWindowDimensions();
  const { user } = useAuth();
  const { chats, loadingChats, id } = useChats(selectedUser?.uid, user?.uid);

  useEffect(() => {
    elementRef.current?.scrollIntoView();
  }, [chats]);

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

  if (loadingChats) {
    return <Loader />;
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
    >
      {!chats.length ? (
        <EmptyChat title="There have been no messages yet..." />
      ) : (
        <MessageWrapper
          position="relative"
          height={screenType !== ScreenType.MOBILE ? 550 : 300}
          mb={1}
        >
          <Box position="absolute" width="99%">
            {chats.map((item) => {
              const isCurrentUser = item.uid === user?.uid;
              const displayName = (
                isCurrentUser ? user?.displayName : selectedUser?.displayName
              )!!;

              return (
                <Box
                  key={item.timestamp}
                  display="flex"
                  flexDirection="column"
                  justifyContent={!isCurrentUser ? 'start' : 'end'}
                  alignItems={!isCurrentUser ? '' : 'end'}
                >
                  <ChatMessage
                    item={item}
                    isCurrentUser={isCurrentUser}
                    avatar={
                      <Avatar
                        src={
                          (isCurrentUser
                            ? user?.photoURL
                            : selectedUser?.photoURL)!!
                        }
                        alt={displayName}
                        {...stringAvatar(displayName)}
                      />
                    }
                    onClickMenu={(event) => setAnchorEl(event.currentTarget)}
                    anchorEl={anchorEl}
                    onCloseMenu={() => setAnchorEl(null)}
                    onRemoveMessage={handleRemoveMessage}
                  />
                </Box>
              );
            })}
            <div ref={elementRef} />
          </Box>
        </MessageWrapper>
      )}
      <ChatForm id={id} selectedUserId={selectedUser?.uid} userId={user?.uid} />
    </Box>
  );
};

export default Chat;
