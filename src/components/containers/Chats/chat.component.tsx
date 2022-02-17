import { Box, TextField } from '@mui/material';
import { ChangeEvent, FC } from 'react';
import ChatMessage from './chatMessage';
import SendIcon from '@mui/icons-material/Send';
import { StyledBox } from './chats.styled';

const Chat: FC = () => {
  const messages = [
    { message: 'hi', user: 'you' },
    { message: 'hi', user: 'not you' },
    { message: 'hello', user: 'you' },
    { message: 'hello', user: 'not you' },
    { message: 'world', user: 'you' },
    { message: 'world 1', user: 'not you' },
    { message: 'world 2', user: 'not you' },
    { message: 'world 2', user: 'not you' },
    { message: 'world 2', user: 'not you' },
    { message: 'world 2', user: 'not you' },
    { message: 'world 2', user: 'not you' },
    { message: 'world 2', user: 'not you' },
    { message: 'world 2', user: 'not you' },
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
      <StyledBox height={550} sx={{ overflowY: 'scroll' }}>
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
      </StyledBox>
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
