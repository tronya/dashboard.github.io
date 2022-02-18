import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { MessageBox } from './chat.styled';

interface ChatMessageProps {
  item: {
    message: string;
    user: string;
  };
}

const ChatMessage: FC<ChatMessageProps> = ({ item }) => {
  return (
    <MessageBox
      display="flex"
      flexDirection="column"
      bgcolor={item.user === 'not you' ? 'lightgreen' : 'lightgray'}
      p={1}
      mb={0.5}
      sx={{ borderRadius: 2 }}
      width="100px"
      isCurrentUser={item.user === 'you'}
    >
      <Typography color="black">{item.message}</Typography>
      <Typography sx={{ fontSize: 10 }} color="black">
        9:25
      </Typography>
    </MessageBox>
  );
};

export default ChatMessage;
