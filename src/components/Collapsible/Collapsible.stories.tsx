import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Collapsible } from "./Collapsible";

export default {
  component: Collapsible,
  title: "Collapsible",
} as ComponentMeta<typeof Collapsible>;

const Template: ComponentStory<typeof Collapsible> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
    <Collapsible {...args} isOpen={isOpen} onClick={toggleOpen}>
      <ul>
        <li>Welcome</li>
        <li>Welcome</li>
        <li>Welcome</li>
        <li>Welcome</li>
        <li>Welcome</li>
        <li>Welcome</li>
        <li>Welcome</li>
      </ul>
    </Collapsible>
    <div className={'relative'}>Hello there</div>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  header: <label>Go In!</label>,
};
