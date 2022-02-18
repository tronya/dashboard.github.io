import { Box, TextField } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import ChatMessage from './chatMessage';
import SendIcon from '@mui/icons-material/Send';
import { MessageWrapper } from './chat.styled';
import useChats from '../../../hooks/useChats';
import { useAuth } from '../../../hooks/useAuth';
import { toast } from 'react-toastify';
import { setChats } from '../../../../pages/api/chats';
import moment from 'moment';
import Loader from '../../ui/Loader/loader';

const Chat: FC = () => {
  const [content, setContent] = useState('');
  const [error, setError] = useState<string | null>(null);

  const { chats, loadingChats } = useChats();
  const { user } = useAuth();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setContent(event.target.value);

  const handleSendMsg = () => {
    if (content.trim().length !== 0) {
      setError(null);
      setContent('');

      setChats({
        content,
        timestamp: moment().unix(),
        uid: user?.uid,
      }).catch((error) => toast.error(error));
    } else {
      setError('Message is empty');
    }
  };

  if (loadingChats) {
    <Loader />;
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
    >
      <MessageWrapper position="relative" height={550}>
        <Box position="absolute" width="95%">
          {chats.map((item) => {
            const isCurrentUser = item.uid === user?.uid;

            return (
              <Box
                key={item.timestamp}
                display="flex"
                flexDirection="column"
                justifyContent={!isCurrentUser ? 'start' : 'end'}
                alignItems={!isCurrentUser ? '' : 'end'}
              >
                <ChatMessage item={item} isCurrentUser={isCurrentUser} />
              </Box>
            );
          })}
        </Box>
      </MessageWrapper>
      <Box display="flex" alignItems="center">
        <TextField
          placeholder="Click here to type something..."
          onChange={handleChange}
          fullWidth
          value={content}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              handleSendMsg();
            }
          }}
        />
        <SendIcon
          sx={{
            color: 'white',
            ml: 1,
            height: 30,
            width: 30,
            cursor: 'pointer',
          }}
          onClick={handleSendMsg}
        />
      </Box>
      {error}
    </Box>
  );
};

export default Chat;
