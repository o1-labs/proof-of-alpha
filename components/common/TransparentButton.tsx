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
  const { label, buttonStyle, ...otherProps } = props;
  return (
    <button
      className={`flex 
       text-white font-normal items-center leading-loose tracking-xlwidest px-3 py-2 space-y-1 hover:bg-opacity-75 active:text-custom-gray-button-border space-x-4 ${buttonStyle}`}
      {...otherProps}
    >
      {label}
    </button>
  );
};

export default TransparentButton;
