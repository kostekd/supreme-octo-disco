import React from "react";
import s from "./Button.module.scss";
import cx from "classnames";
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
  label: string;
  size: ButtonSize;
  onClick?: () => void;
}

const Button = ({ label, size = "medium", onClick }: ButtonProps) => {
  return (
    <button className={cx(s[`button`], s[`button--${size}`])} onClick={onClick}>
      {label}
    </button>
  );
};

export { Button };
