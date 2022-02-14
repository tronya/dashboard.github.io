import styled from 'styled-components';
import { Box } from '@mui/material';

export const MapHolder = styled(Box)({
  position: 'relative',
  backgroundColor: 'grey',
});

export const MapHolderFooter = styled(Box)({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  backdropFilter: 'blur(5px)',
  padding: '10px',
  justifyContent: 'flex-end',
  zIndex: 9,
});
