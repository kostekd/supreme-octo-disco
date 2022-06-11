import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


/**
 *
 * @author Dominik Kostencki
 * @description This is a toast based fully on React-Toastify with some custom styling
 */

const BaseToast = () => {
  return <ToastContainer theme="colored" />;
};

export { BaseToast };
