import React from "react";
import s from "./Button.module.scss";
import cx from "classnames";

export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
  /**
   * What label should be displayed on the button
   */
  label: string;
  /**
   * What size should the button be?
   */
  size: ButtonSize;
  /**
   * What should happend when button is being clicked?
   */
  onClick?: () => void;
}

/**
 * 
 * @author Dominik Kostencki 
 * @description Primary button UI component
 */

const Button = ({ label, size = "medium", onClick }: ButtonProps) => {
  return (
    <button className={cx(s[`button`], s[`button--${size}`])} onClick={onClick}>
      {label}
    </button>
  );
};

export { Button };
