import { Box, Typography } from '@mui/material';
import { FC } from 'react';

interface ChatMessageProps {
  item: {
    message: string;
    user: string;
  };
}

const ChatMessage: FC<ChatMessageProps> = ({ item }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      bgcolor={item.user === 'you' ? 'lightgray' : 'lightgreen'}
      p={1}
      mb={0.5}
      sx={{ borderRadius: 2 }}
      width="100px"
    >
      <Typography color="black">{item.message}</Typography>
      <Typography sx={{ fontSize: 10 }} color="black">
        9:25
      </Typography>
    </Box>
  );
};

export default ChatMessage;
