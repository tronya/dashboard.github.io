import { Typography } from '@mui/material';
import moment from 'moment';
import { FC } from 'react';
import { Chat } from '../../../models/chat.model';
import { MessageBox } from './chat.styled';

interface ChatMessageProps {
  item: Chat;
  isCurrentUser: boolean;
}

const ChatMessage: FC<ChatMessageProps> = ({ item, isCurrentUser }) => {
  const messageTime = moment.unix(item.timestamp).format('hh:mm');

  return (
    <MessageBox
      display="flex"
      flexDirection="column"
      bgcolor={!isCurrentUser ? 'lightgray' : 'lightgreen'}
      p={1}
      mb={0.5}
      sx={{ borderRadius: 2 }}
      width="100px"
      isCurrentUser={isCurrentUser}
    >
      <Typography color="black">{item.content}</Typography>
      <Typography sx={{ fontSize: 10 }} color="black">
        {messageTime}
      </Typography>
    </MessageBox>
  );
};

export default ChatMessage;
