import React from "react";
import { useTranslation } from 'react-i18next';
import Button from "components/Button/Button";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="Home">
      <h1>{ t("home.hello") }</h1>
      <Button></Button>
    </div>
  )
}
