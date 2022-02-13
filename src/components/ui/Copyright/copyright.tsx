import { Link, Typography } from '@mui/material';
import { FC } from 'react';

const Copyright: FC = () => (
  <Typography
    variant="body2"
    color="text.secondary"
    align="center"
    sx={{ mt: 5 }}
  >
    {'Copyright © '}
    <Link color="inherit" href="https://tronya.github.io">
      whereiam
    </Link>{' '}
    {new Date().getFullYear()}
  </Typography>
);

export default Copyright;
