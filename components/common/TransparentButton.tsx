import React, { ButtonHTMLAttributes } from 'react';

interface transparentButtonPropTypes
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: string;
  label: string;
}

/**
 * @param {string} buttonStyle Additional TailwindCSS classes (optional).
 * @param {string} label Button label
 */
const TransparentButton = (props: transparentButtonPropTypes) => {
  const { label, buttonStyle, children, ...otherProps } = props;
  return (
    <button
      className={`tracking-xlwidest 
       3xl:py-3 3xl:px-4 active:text-custom-gray-button-border flex items-center space-y-1 space-x-4 px-1 py-1 font-normal leading-loose text-white hover:bg-opacity-75 2xl:px-3 2xl:py-2 ${buttonStyle}`}
      {...otherProps}
    >
      {label}
      {children}
    </button>
  );
};

export default TransparentButton;
