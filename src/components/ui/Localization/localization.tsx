import { FC, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonGroup } from "@mui/material";

const Localization: FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event: MouseEvent<HTMLButtonElement>) =>
    i18n.changeLanguage(event.currentTarget.value);

  return (
    <ButtonGroup variant="contained">
      <Button onClick={changeLanguage} value="en">
        EN
      </Button>
      <Button onClick={changeLanguage} value="ua">
        UA
      </Button>
    </ButtonGroup>
  );
};

export default Localization;
