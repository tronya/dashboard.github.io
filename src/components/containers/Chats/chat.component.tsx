import { Avatar, Box, Button, TextField } from '@mui/material';
import { FC } from 'react';
import ChatMessage from './chatMessage';
import SendIcon from '@mui/icons-material/Send';
import { MessageWrapper } from './chat.styled';
import useChats from '../../../hooks/useChats';
import { useAuth } from '../../../hooks/useAuth';
import { toast } from 'react-toastify';
import { setChats } from '../../../../pages/api/chats';
import moment from 'moment';
import Loader from '../../ui/Loader/loader';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import EmptyChat from './chat.empty';
import { stringAvatar } from '../../../utils/user';
import { UserGeolocation } from '../../../models/usersGeolocation';

interface ChatProps {
  selectedUser: UserGeolocation;
}

const Chat: FC<ChatProps> = ({ selectedUser }) => {
  const { user } = useAuth();
  const { chats, loadingChats, id } = useChats(selectedUser.uid, user?.uid);

  const formik = useFormik({
    initialValues: {
      content: '',
    },
    validationSchema,
    onSubmit: ({ content }) => onSendMsg(content),
  });

  const onSendMsg = (content: string) => {
    formik.resetForm();
    setChats(
      selectedUser.uid,
      user?.uid,
      {
        content,
        timestamp: moment().unix(),
        uid: user?.uid,
      },
      id
    ).catch((error) => toast.error(error));
  };

  if (loadingChats) {
    return <Loader />;
  }

  if (!chats.length) {
    return <EmptyChat title="There have been no messages yet..." />;
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
    >
      <MessageWrapper position="relative" height={550} mb={1}>
        <Box position="absolute" width="98%">
          {chats.map((item) => {
            const isCurrentUser = item.uid === user?.uid;
            const displayName = (
              isCurrentUser ? user?.displayName : selectedUser.displayName
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
                          : selectedUser.photoURL)!!
                      }
                      alt={displayName}
                      {...stringAvatar(displayName)}
                    />
                  }
                />
              </Box>
            );
          })}
        </Box>
      </MessageWrapper>
      <form onSubmit={formik.handleSubmit}>
        <Box display="flex">
          <TextField
            placeholder="Click here to type something..."
            onChange={formik.handleChange}
            fullWidth
            name="content"
            multiline
            maxRows={5}
            value={formik.values.content}
            error={formik.touched.content && Boolean(formik.errors.content)}
            helperText={formik.touched.content && formik.errors.content}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                formik.handleSubmit();
              }
            }}
          />
          <Button
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
            variant="outlined"
            sx={{ ml: 1, height: '56px' }}
          >
            <SendIcon />
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Chat;
