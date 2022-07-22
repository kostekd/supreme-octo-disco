import React from "react";
import { toastService } from "../../../components/Toast/toast";
import { Button } from "../../../components/Button/Button";

export const LogoutPage: React.FC = () => {
  return (
    <>
      <div>This will shortly be a Logout page, stay tuned</div>
      <Button onClick={() => toastService.error("You are dudu")}>
        No to od nas uciekłeś :/
      </Button>
    </>
  );
};
