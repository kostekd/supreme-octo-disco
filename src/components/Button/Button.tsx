import React from "react";
import s from "./Button.module.scss";
import cx from "classnames";

export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
  /**
   * What size should the button be?
   */
  size?: ButtonSize;
  /**
   * What should happend when button is being clicked?
   */
  onClick?: () => void;
  /**
   * external className for custom styling
   */
  className?: string;
  /**
   * What label should be displayed on the button
   */
  children: React.ReactNode;
}

/**
 *
 * @author Dominik Kostencki
 * @description Primary button UI component
 */

const Button = ({
  size = "medium",
  onClick,
  className,
  children,
}: ButtonProps) => {
  return (
    <button
      className={cx(className, s[`button`], s[`button--${size}`])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
