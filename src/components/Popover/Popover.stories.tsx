import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Popover from "./Popover";
import { Button } from "../Button/Button";

export default {
  component: Popover,
  title: "Popover",
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const onCloseHandler = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div id="test"></div>
      <Button label="Show me a Popover" onClick={onCloseHandler} size="small" />
      <Popover isOpen={isOpen} onClose={onCloseHandler}>
        <span>The content of a popover</span>
      </Popover>
      <div>Co ty gadasz</div>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
