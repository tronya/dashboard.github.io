import { Box, TextField, Button } from '@mui/material';
import { FC } from 'react';
import EmojiPicker from '../../ui/EmojiPicker/emojiPicker';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';
import { validationSchema } from './validationSchema';
import { BaseEmoji } from 'emoji-mart';
import { useFormik } from 'formik';
import moment from 'moment';
import { toast } from 'react-toastify';
import { setChats } from '../../../../pages/api/chats';

interface ChatFormProps {
  selectedUserId: string | undefined;
  userId: string | undefined;
  id: string | null;
}

const ChatForm: FC<ChatFormProps> = ({ id, userId, selectedUserId }) => {
  const formik = useFormik({
    initialValues: {
      content: '',
      showEmoji: false,
    },
    validationSchema,
    onSubmit: ({ content }) => onSendMsg(content),
  });

  const onSendMsg = (content: string) => {
    formik.resetForm();
    setChats(
      selectedUserId,
      userId,
      {
        content,
        timestamp: moment().unix(),
        uid: userId,
      },
      id
    ).catch((error) => toast.error(error));
  };

  const handleEmojiSelect = (event: BaseEmoji) =>
    formik.setFieldValue('content', (formik.values.content += event.native));

  return (
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
          onClick={() =>
            formik.setFieldValue('showEmoji', !formik.values.showEmoji)
          }
          sx={{ ml: 1, height: '56px' }}
        >
          <EmojiEmotionsIcon sx={{ color: 'white' }} />
        </Button>
        {formik.values.showEmoji && (
          <EmojiPicker onSelect={handleEmojiSelect} />
        )}
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
  );
};

export default ChatForm;
