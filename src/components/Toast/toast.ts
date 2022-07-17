import { Severity } from "../../shared/types";
import { toast as toasts } from "react-toastify";
import React, { ReactNode } from "react";
import { FiXOctagon, FiAlertTriangle } from "react-icons/fi";
import { GoCheck } from "react-icons/go";
import s from "./Toast.module.scss";
import cx from "classnames";

interface ToastProps {
  icon?: React.FC | ReactNode;
  className?: string;
  autoClose?: number;
}

const defaultToastSettings: Record<Severity, ToastProps> = {
  success: {
    icon: GoCheck,
    className: cx(s.toast, s["toast--success"]),
    autoClose: 3000,
  },
  warning: {
    icon: FiAlertTriangle,
    className: cx(s.toast, s["toast--warning"]),
    autoClose: 3000,
  },
  error: {
    icon: FiXOctagon,
    className: cx(s.toast, s["toast--error"]),
    autoClose: 3000,
  },
};

export const toastService: Record<
  Severity,
  (label: string, props?: ToastProps) => {}
> = {
  success: (label, props) =>
    toasts.success(label, {
      ...defaultToastSettings.success,
      ...props,
    }),
  warning: (label, props) =>
    toasts.warn(label, { ...defaultToastSettings.warning, ...props }),
  error: (label, props) =>
    toasts.error(label, { ...defaultToastSettings.error, ...props }),
};
