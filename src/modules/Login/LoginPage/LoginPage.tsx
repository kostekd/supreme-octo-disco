import React from "react";
import { toastService } from "../../../components/Toast/toast";
import { Button } from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div>This will shortly be a Login page, stay tuned</div>
      <Button onClick={() => toastService.error("You are dudu")}>
        Essa byku
      </Button>
      <div>Przetestuj se routera z cofaniem</div>
      <Button size={"small"} onClick={handleGoBack}>
        Weź się byku cofnij
      </Button>
    </>
  );
};
