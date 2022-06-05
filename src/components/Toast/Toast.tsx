import React, { useEffect, useState } from "react";
import s from "./Toast.module.scss";
import cx from "classnames";

interface ToastProps {
  content: string;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}
const Toast = ({ content, setVisibility }: ToastProps) => {
  const [percentage, setPercentage] = useState<number>(100);
  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setPercentage((prevState) => prevState - 0.2);
    }, 10);
    return () => clearInterval(loadingInterval);
  }, []);
  if (percentage <= 0) {
    setVisibility(false);
  }
  return (
    <div className={s.toast}>
      {content}
      <div className={s.loading} style={{ width: percentage + "%" }} />
    </div>
  );
};

export default Toast;
