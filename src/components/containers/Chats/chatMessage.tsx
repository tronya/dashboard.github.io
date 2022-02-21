/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from '@mui/material';
import moment from 'moment';
import { FC, ReactNode, MouseEvent } from 'react';
import { Chat } from '../../../models/chat.model';
import { MessageBox } from './chat.styled';
import Menu from '../../ui/Menu/menu';

interface ChatMessageProps {
  item: Chat;
  isCurrentUser: boolean;
  avatar: ReactNode;
  onClickMenu: (event: MouseEvent<SVGSVGElement>) => void;
  anchorEl: SVGSVGElement | null;
  onCloseMenu: () => void;
  onRemoveMessage: (key: string | undefined) => void;
}

const ChatMessage: FC<ChatMessageProps> = ({
  item,
  isCurrentUser,
  avatar,
  onClickMenu,
  anchorEl,
  onCloseMenu,
  onRemoveMessage,
}) => {
  const allowableStorageUrl = 'firebasestorage.googleapis.com';
  const messageTime = moment.unix(item.timestamp).format('kk:mm');

  return (
    <MessageBox
      display="flex"
      alignItems="center"
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
        {item.content.includes(allowableStorageUrl) ? (
          <Box display="flex" height="100px" width={1}>
            <img alt={item.content} src={item.content} />
          </Box>
        ) : (
          <Typography color="black">{item.content}</Typography>
        )}
        <Typography sx={{ fontSize: 10 }} color="black">
          {messageTime}
        </Typography>
      </Box>
      {isCurrentUser && (
        <>
          {avatar}
          <Menu
            anchorEl={anchorEl}
            onCloseMenu={onCloseMenu}
            onRemoveItem={onRemoveMessage}
            id={item.messageId}
            onClickMenu={onClickMenu}
          />
        </>
      )}
    </MessageBox>
  );
};

export default ChatMessage;
