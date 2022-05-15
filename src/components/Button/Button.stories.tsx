import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
    component: Button,
    title: 'Button',
} as ComponentMeta<typeof Button>;

// const Template = (args : ButtonProps) => <Button {...args}/>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    label: 'Create New',
}