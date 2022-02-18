import { Box, Typography } from '@mui/material';
import moment from 'moment';
import { FC, ReactNode } from 'react';
import { Chat } from '../../../models/chat.model';
import { MessageBox } from './chat.styled';

interface ChatMessageProps {
  item: Chat;
  isCurrentUser: boolean;
  avatar: ReactNode;
}

const ChatMessage: FC<ChatMessageProps> = ({ item, isCurrentUser, avatar }) => {
  const messageTime = moment.unix(item.timestamp).format('hh:mm');

  return (
    <MessageBox
      display="flex"
      alignItems={isCurrentUser ? 'end' : ''}
      bgcolor={!isCurrentUser ? 'lightgray' : 'lightgreen'}
      p={1}
      mb={0.5}
      sx={{ borderRadius: 2, wordBreak: 'break-all' }}
      width="fit-content"
      isCurrentUser={isCurrentUser}
    >
      {!isCurrentUser && avatar}
      <Box
        display="flex"
        flexDirection="column"
        alignItems={isCurrentUser ? 'end' : ''}
        sx={{ ml: !isCurrentUser ? 1 : 0, mr: isCurrentUser ? 1 : 0 }}
      >
        <Typography color="black">{item.content}</Typography>
        <Typography sx={{ fontSize: 10 }} color="black">
          {messageTime}
        </Typography>
      </Box>
      {isCurrentUser && avatar}
    </MessageBox>
  );
};

export default ChatMessage;
