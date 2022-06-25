import React from "react";
import cx from "classnames";
import s from "./Popover.module.scss";
import { AiOutlineClose } from "react-icons/ai";

export type PopoverProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const Popover: React.FC<PopoverProps> = ({ isOpen, onClose, children }) => {
  if (isOpen)
    return (
      <div className={s.popover}>
        {children}
      </div>
    );
  else return null;
};

export default Popover;
