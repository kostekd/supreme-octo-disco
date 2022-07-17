import React from "react";
import { toastService } from "../../../components/Toast/toast";
import { Button } from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { APP_URLS } from "../../../shared/enums";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(APP_URLS.LOGIN, { replace: true });
  };
  return (
    <>
      <div>This will shortly be a Home page for our app</div>
      <Button onClick={() => toastService.error("You are dudu")}>
        Poka tosta
      </Button>
      <div>Przetestuj se routera</div>
      <Button onClick={handleNavigate}>Weź mnie do LoginPage</Button>
    </>
  );
};
