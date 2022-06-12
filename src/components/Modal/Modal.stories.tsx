import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from "./Modal";
import useModal from "../../hooks/useModal";
import { Button } from "../Button/Button";

export default {
  component: Modal,
  title: "Modal",
} as ComponentMeta<typeof Modal>;

// const Template = (args : ButtonProps) => <Button {...args}/>

const Template: ComponentStory<typeof Modal> = (args) => {
  const { isOpen, handleModal } = useModal();
  return (
    <>
      <div id="test"></div>
      <Button label="Show Modal" onClick={handleModal}/>
      <Modal {...args} isOpen={isOpen} handleModal={handleModal} destination='#test'>
        <h3>This modal is generally awesome</h3>
        <ul>
            <li>This is cool</li>
            <li>This is cool x2</li>
            <li>This is cool x4</li>
            <li>This is cool x8</li>
        </ul>
        <div>If you want you can close me from inside</div>
        <Button label="Close Modal" size="small" onClick={handleModal}></Button>
      </Modal>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  children: <h4>I am a beautiful Modal</h4>,
};
