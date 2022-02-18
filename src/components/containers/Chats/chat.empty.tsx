import { Box, Typography } from '@mui/material';
import { FC } from 'react';

interface EmptyChatProps {
  title: string;
}

const EmptyChat: FC<EmptyChatProps> = ({ title }) => (
  <Box display="flex" justifyContent="center" width={1}>
    <Typography variant="h5" color="white">
      {title}
    </Typography>
  </Box>
);

export default EmptyChat;
