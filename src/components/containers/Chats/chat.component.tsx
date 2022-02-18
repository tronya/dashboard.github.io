import { Box, TextField } from '@mui/material';
import { ChangeEvent, FC } from 'react';
import ChatMessage from './chatMessage';
import SendIcon from '@mui/icons-material/Send';
import { MessageWrapper } from './chat.styled';

const Chat: FC = () => {
  const messages = [
    { message: 'hi', user: 'you' },
    { message: 'hi 1', user: 'not you' },
    { message: 'hello', user: 'you' },
    { message: 'hello 1', user: 'not you' },
    { message: 'world', user: 'you' },
    { message: 'world 1', user: 'not you' },
    { message: 'world 2', user: 'not you' },
    { message: 'world 3', user: 'not you' },
    { message: 'world 4', user: 'not you' },
    { message: 'world 5', user: 'not you' },
    { message: 'world 6', user: 'not you' },
    { message: 'world 7', user: 'not you' },
    { message: 'world 8', user: 'not you' },
  ];

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    console.log(event.target.value);

  const handleSendMsg = () => console.log('SEND');

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
    >
      <MessageWrapper position="relative" height={550}>
        <Box position="absolute" width="95%">
          {messages.map((item) => (
            <Box
              key={item.message}
              display="flex"
              flexDirection="column"
              justifyContent={item.user === 'you' ? 'start' : 'end'}
              alignItems={item.user === 'you' ? '' : 'end'}
            >
              <ChatMessage item={item} />
            </Box>
          ))}
        </Box>
      </MessageWrapper>
      <Box display="flex" alignItems="center">
        <TextField
          placeholder="Click here to type something..."
          onChange={handleChange}
          fullWidth
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              console.log('PRESSED');
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
    </Box>
  );
};

export default Chat;
