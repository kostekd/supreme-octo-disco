import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Modal, ModalProps } from "./Modal";

describe("Modal", () => {
  let initProps: ModalProps = {
    isOpen: false,
    handleModal: function (): void {
      throw new Error("Function not implemented.");
    },
    children: undefined,
  };
  const renderedComponent = (
    <>
      <div id="modal-root"></div>
      <Modal isOpen={true} handleModal={() => {}}>
        <div>Foo</div>
      </Modal>
      <div>Foo</div>
    </>
  );

  //TODO I dont now how to test it yet
  test("should render Modal Content", () => {
    render(
      <>
        <div id="modal-root"></div>
        <Modal isOpen={true} handleModal={() => {}}>
          <div>Foo</div>
        </Modal>
      </>
    );
  });
});
