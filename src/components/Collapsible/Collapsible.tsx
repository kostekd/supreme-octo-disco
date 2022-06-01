import React from "react";
import cx from "classnames";
import s from "./Collapsible.module.scss";

import { FiChevronLeft, FiChevronDown } from "react-icons/fi";

export interface CollapsibleProps {
  /**
   * What label should be displayed in the header
   */
  header: React.ReactNode;
  /**
   * Is Collapsible Open (Lifting up state)
   */
  isOpen?: Boolean;
  /**
   * Function that toggle the visibility state
   */
  onClick?: () => void;
  /**
   * Standard children props
   */
  children: React.ReactNode;
  /**
   * Additional styling
   */
  className?: string;
}

/**
 *
 * @author Dominik Kostencki
 * @description Collapsible UI component
 */

const Collapsible = ({
  header,
  isOpen,
  onClick,
  children,
  className,
}: CollapsibleProps) => {
  const style = isOpen ? s["slide-down"] : s["slide-up"];

  return (
    <div className={cx(s.container)}>
      <div className={cx(s.header)} onClick={onClick}>
        {header}
        {isOpen ? <FiChevronDown /> : <FiChevronLeft />}
      </div>
      <div className={style}>
        <div className={cx(s.content)}>{children}</div>
      </div>
    </div>
  );
};

export { Collapsible };
