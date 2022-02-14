import {
  AvatarGroup,
  Badge,
  Box as BoxComponent,
  List,
  styled as styledMUI,
} from '@mui/material';
import { orange } from '@mui/material/colors';
import styled from 'styled-components';

export const StyledList = styled(List)`
  @media (max-width: 599px) {
    margin-right: unset;
  }
`;

export const Box = styled(BoxComponent)`
  &:hover {
    li {
      svg {
        color: ${orange[500]};
      }
    }
  }
`;

export const StyledBadge = styledMUI(Badge)(() => ({
  '& .MuiBadge-badge': {
    bottom: '10%',
    right: '23%',
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export const StyledAvatarGroup = styledMUI(AvatarGroup)(() => ({
  '& .MuiAvatarGroup-avatar': {
    height: 50,
    width: 50,
  },
}));
