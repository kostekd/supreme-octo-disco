import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Notification } from './Notification';

export default {
    title: 'Notification',
    component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => <Notification {...args} >Hello</Notification>;

export const Basic = Template.bind({});
Basic.args = {
    title: 'This is new notification',
}