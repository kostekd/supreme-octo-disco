import React, { ReactNode } from "react";
import s from "./Modal.module.scss";
import cx from "classnames";
import ReactDOM from "react-dom";

import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  /**
   * Current state of modal visible/hidden
   */
  isOpen: boolean;
  /**
   * Toggles the visibility of Modal
   */
  handleModal: () => void;
  /**
   * Id of a div that should render Modal (default is placed in index.html)
   */
  destination?: string;
  /**
   * Standard children component
   */
  children: React.ReactNode;
}

/**
 *
 * @author Dominik Kostencki
 * @description Primary modal Component
 */
const Modal = ({ isOpen, handleModal, destination, children }: ModalProps) => {
  const portalDestination = document.querySelector(destination || "#modal-root");

  if (portalDestination && isOpen) {
    return ReactDOM.createPortal(
      <div className={s.modal}>
        <div className={cx(s["modal--content"])}>
          <div className={cx(s["modal--content--button"])}>
              <AiOutlineClose onClick={handleModal} className={s['icon']} />
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
