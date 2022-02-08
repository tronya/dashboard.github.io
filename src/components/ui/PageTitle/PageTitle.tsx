import { Typography } from "@mui/material";
import { FC, ReactNode } from "react";

interface PageTitleProps {
  title: string | ReactNode;
}
const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <Typography variant="h3" component="div">
      {title}
    </Typography>
  );
};
export default PageTitle;
