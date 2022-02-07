import { Box, List } from "@mui/material";
import styled from "styled-components";

export const StyledList = styled(List)`
  @media (max-width: 599px) {
    margin-right: unset;
  }
`;

export const StyledBox = styled(Box)`
  &:hover {
    li {
      svg {
        color: #f9992c;
      }
    }
  }
`;
