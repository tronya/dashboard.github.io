import { Box } from '@mui/material';
import styled from 'styled-components';

export const MessageWrapper = styled(Box)`
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MessageBox = styled(Box)<{
  isCurrentUser?: boolean;
}>`
  position: relative;
  margin-left: 10px;

  &:before {
    content: '';
    position: absolute;
    bottom: 20px;
    left: ${({ isCurrentUser }) => (!isCurrentUser ? '-12px' : '')};
    right: ${({ isCurrentUser }) => (isCurrentUser ? '-12px' : '')};
    z-index: 1;
    border: solid 6px transparent;
    border-left-color: ${({ isCurrentUser }) =>
      isCurrentUser ? 'lightgreen' : ''};
    border-right-color: ${({ isCurrentUser }) =>
      !isCurrentUser ? 'lightgray' : ''};
  }
`;
