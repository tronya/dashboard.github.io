import styled from 'styled-components';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

export const StyledArrowCircleUpIcon = styled(ArrowCircleUpIcon)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 40px;
  width: 40px;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`;
