import { Button } from "@mui/material";
import { FC } from "react";
import "../../../i18n/config";
import { useTranslation } from "react-i18next";
import { withTranslation } from "react-i18next";

const Localization: FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (event: any) => {
    console.log(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  console.log(t("dashboard"));
  return (
    <>
      <button onClick={changeLanguage} value="en">
        En
      </button>
      <br />
      <button onClick={changeLanguage} value="ua">
        Ua
      </button>
    </>
  );
};

export default withTranslation()(Localization);
