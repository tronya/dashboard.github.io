import { Box as BoxComponent, List } from "@mui/material";
import { orange } from "@mui/material/colors";
import styled from "styled-components";

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
