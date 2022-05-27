import React from "react";
import cx from "classnames";
import s from "./Collapsible.module.scss";

interface CollapsibleProps {
  header: React.ReactNode;
  isOpen: Boolean;
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
}

const Collapsible = ({
  header,
  isOpen,
  onClick,
  children,
  className,
}: CollapsibleProps) => {
  return (
    <div>
      <div className={cx(s.header, className)} onClick={onClick}>
        {header}
      </div>
      {isOpen && <div className={s.content}>{children}</div>}
    </div>
  );
};

export { Collapsible };
