/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import React from "react";

interface ButtonProps {
    classname: string;
    onClick?: any;
    children:any;
}
export default function Button({ classname, onClick, children } : Partial<ButtonProps>) {
  return (
    <button
      className={`ml-6 md:ml-0 md:mt-1 hover:text-yellow-300 dark:hover:text-yellow-200 ${classname}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
