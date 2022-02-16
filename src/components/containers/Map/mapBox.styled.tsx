import styled from 'styled-components';
import { Box } from '@mui/material';

export const MapHolder = styled(Box)({
  position: 'relative',
  backgroundColor: 'grey',
});

export const MapHolderFooter = styled(Box)({
  position: 'absolute',
  top: 0,
  padding: '16px 24px',
  display: 'flex',
  zIndex: 9,
});
