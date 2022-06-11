import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BaseToast } from "./BaseToast";
import { Button } from "../Button/Button";
import { toastService } from "./toast";

export default {
  component: BaseToast,
  title: "Toast",
} as ComponentMeta<typeof BaseToast>;

const Template: ComponentStory<typeof BaseToast> = () => {

  return (
    <>
      <Button label="Success" onClick={() => {toastService.success("You did it!")}} />
      <Button label="Warning" onClick={() => {toastService.warning("There has been an error!")}} />
      <Button label="Error" onClick={() => {toastService.error("Something went horribly wrong!")}} />
      <BaseToast/>
    </>
  );
};

export const Basic = Template.bind({});
