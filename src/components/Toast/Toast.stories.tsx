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
      <Button onClick={() => {toastService.success("You did it!")}} >Success</Button>
      <Button onClick={() => {toastService.warning("There has been an error!")}} >Warning</Button>
      <Button onClick={() => {toastService.error("Something went horribly wrong!")}}>Error</Button>
      <BaseToast/>
    </>
  );
};

export const Basic = Template.bind({});
