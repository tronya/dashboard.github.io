/* eslint-disable @next/next/no-img-element */
import { Box, TextField, Button } from '@mui/material';
import { FC, useRef } from 'react';
import EmojiPicker from '../../ui/EmojiPicker/emojiPicker';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';
import { validationSchema } from './validationSchema';
import { BaseEmoji } from 'emoji-mart';
import { useFormik } from 'formik';
import moment from 'moment';
import { toast } from 'react-toastify';
import { setChats } from '../../../../pages/api/chats';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { STORAGE } from '../../../firebase';
import CircularProgressWithLabel from '../../ui/CircularProgressWithLabel/circularProgressWithLabel';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface ChatFormProps {
  selectedUserId: string | undefined;
  userId: string | undefined;
  id: string | null;
}

const ChatForm: FC<ChatFormProps> = ({ id, userId, selectedUserId }) => {
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);

  const formik = useFormik({
    initialValues: {
      content: '',
      showEmoji: false,
      imageUrl: null,
      uploadingProgress: 0,
    },
    validationSchema,
    onSubmit: ({ content }) => onSendMsg(content),
  });

  const uploadFile = (file: File | undefined) => {
    if (!file) {
      return null;
    }

    const storageRef = ref(STORAGE, `/files/${file.name}`);
    const uploadFile = uploadBytesResumable(storageRef, file);

    uploadFile.on(
      'state_changed',
      (snapshot) => {
        const uploadingProgress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        formik.setFieldValue('uploadingProgress', uploadingProgress);
      },
      (error) => toast.error(error),
      () => {
        getDownloadURL(uploadFile.snapshot.ref).then((url) => {
          formik.setFieldValue('imageUrl', url);
          formik.setFieldValue('content', url);
          return url;
        });
      }
    );
  };

  const onSendMsg = (content: string) => {
    formik.resetForm();

    if (formik.values.imageUrl) {
      setChats(
        selectedUserId,
        userId,
        {
          content: formik.values.imageUrl,
          timestamp: moment().unix(),
          uid: userId,
        },
        id
      ).catch((error) => toast.error(error));
    } else {
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
    }
  };

  const handleEmojiSelect = (event: BaseEmoji) =>
    formik.setFieldValue('content', (formik.values.content += event.native));

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box display="flex" alignItems="center">
        {formik.values.imageUrl ? (
          <Box mx={1} display="flex" height="100px" width={1}>
            <Box display="flex" position="relative">
              <img alt={formik.values.imageUrl} src={formik.values.imageUrl} />
              <HighlightOffIcon
                onClick={() => {
                  formik.setFieldValue('imageUrl', null);
                  formik.setFieldValue('content', '');
                }}
                color="error"
                sx={{
                  position: 'absolute',
                  right: '-10px',
                  top: '-10px',
                  cursor: 'pointer',
                }}
              />
            </Box>
          </Box>
        ) : (
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
            InputProps={{
              endAdornment: (
                <EmojiEmotionsIcon
                  sx={{ color: 'white', cursor: 'pointer' }}
                  onClick={() =>
                    formik.setFieldValue('showEmoji', !formik.values.showEmoji)
                  }
                />
              ),
            }}
          />
        )}
        {formik.values.showEmoji && (
          <EmojiPicker onSelect={handleEmojiSelect} />
        )}
        {formik.values.uploadingProgress === 100 ||
        formik.values.uploadingProgress === 0 ? (
          <Button sx={{ ml: 1, height: '56px' }}>
            <AttachFileIcon
              onClick={() => {
                if (hiddenFileInput.current) {
                  hiddenFileInput.current.click();
                }
              }}
              sx={{ color: 'white' }}
            />
          </Button>
        ) : (
          <CircularProgressWithLabel value={formik.values.uploadingProgress} />
        )}
        <input
          accept="image/*"
          ref={hiddenFileInput}
          type="file"
          onChange={(event) => uploadFile(event.target.files?.[0])}
          style={{ display: 'none' }}
        />
        <Button
          type="submit"
          disabled={!(formik.isValid && formik.dirty)}
          variant="outlined"
          sx={{ ml: 1, height: '56px' }}
        >
          <SendIcon sx={{ color: 'white' }} />
        </Button>
      </Box>
    </form>
  );
};

export default ChatForm;
