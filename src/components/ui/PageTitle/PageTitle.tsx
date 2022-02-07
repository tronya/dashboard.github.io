import { Typography } from "@mui/material";
import { FC } from "react";
import { TFunction } from "react-i18next";
interface PageTitleProps {
  title: string | any;
}
const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <Typography variant="h3" component="div">
      {title}
    </Typography>
  );
};
export default PageTitle;
