import React, { ReactNode } from "react";
import s from "./Modal.module.scss";
import cx from "classnames";
import ReactDOM from "react-dom";

import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  isOpen: boolean;
  handleModal: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, handleModal, children }: ModalProps) => {
  const portalDestination = document.querySelector("#modal-root");

  if (portalDestination && isOpen) {
    return ReactDOM.createPortal(
      <div className={s.modal}>
        <div className={cx(s["modal--content"])}>
          <div className={cx(s["modal--content--button"])}>
            <button onClick={handleModal}>
              <AiOutlineClose />
            </button>
          </div>
          {children}
        </div>
      </div>,
      portalDestination
    );
  } else {
    return null;
  }
};

export { Modal };
