import React from "react";
import cx from "classnames";
import s from "./Notification.module.scss";

import { FiAlertTriangle } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";



export type notificationType = 'warning' | 'error' | 'success' | 'hint';


const iconComponent = {
    warning: FiAlertTriangle,
    error: FiCheckCircle,
    success: FiCheckCircle,
    hint: FiHelpCircle
}


export interface NotificationProps {
    /**
     * Title displayed on the notification
     */
    title: string;
    /**
     * Type of the notification
     */
    type: notificationType;
    /**
     * Content of the Notification
     */
    children: React.ReactNode;
    /**
     * Additional styling passed to the component
     */
    className?: string;
};

const Notification = ({ title, type, children, className }: NotificationProps) => {

    const Component = iconComponent[type];

    return (
        <div className={cx(s.content,className)}>
            <div>
                <Component size={60} />
            </div>
            <div className={s.text}>
                <div>{title}</div>
                <div>{children}</div>
            </div>
        </div>
    );
};

export { Notification };