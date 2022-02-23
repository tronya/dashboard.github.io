import { Avatar, Box } from '@mui/material';
import { Dispatch, FC, MutableRefObject, SetStateAction } from 'react';
import ChatMessage from './chatMessage';
import { MessageWrapper } from './chat.styled';
import { useAuth } from '../../../hooks/useAuth';
import { Chat as ChatType } from '../../../models/chat.model';
import EmptyChat from './chat.empty';
import { stringAvatar } from '../../../utils/user';
import { UserGeolocation } from '../../../models/usersGeolocation';
import ChatForm from './chatForm';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { ScreenType } from '../../../constants';

interface ChatProps {
  onRemoveMessage: (key: string | undefined) => void;
  selectedUser?: UserGeolocation;
  anchorEl: SVGSVGElement | null;
  chats: ChatType[];
  elementRef: MutableRefObject<HTMLDivElement | null>;
  onAnchorEl: Dispatch<SetStateAction<SVGSVGElement | null>>;
  id?: string | null;
  onSendMsg: (
    data: {
      content: string;
      timestamp: number;
      uid: string | undefined;
    },
    selectedUserId?: string | undefined,
    userId?: string | undefined,
    id?: string | undefined | null
  ) => void;
}

const Chat: FC<ChatProps> = ({
  selectedUser,
  onRemoveMessage,
  anchorEl,
  chats,
  elementRef,
  onAnchorEl,
  id,
  onSendMsg,
}) => {
  const { screenType } = useWindowDimensions();
  const { user } = useAuth();

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
                    onClickMenu={(event) => onAnchorEl(event.currentTarget)}
                    anchorEl={anchorEl}
                    onCloseMenu={() => onAnchorEl(null)}
                    onRemoveMessage={onRemoveMessage}
                  />
                </Box>
              );
            })}
            <div ref={elementRef} />
          </Box>
        </MessageWrapper>
      )}
      <ChatForm
        id={id}
        selectedUserId={selectedUser?.uid}
        userId={user?.uid}
        onSendMsg={onSendMsg}
      />
    </Box>
  );
};

export default Chat;
