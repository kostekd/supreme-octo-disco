import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Accordion } from "./Accordion";
import { ActionTypeAccordion } from "./reducer/reducer";

export default {
  component: Accordion,
  title: "Accordion",
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  collapsibles: [
    { header: <label>First!</label>, children: <label> I love pizza</label> },
    { header: <label> You are a fool</label>, children: <h4>No I am not</h4> },
  ],
};
