import React, { ButtonHTMLAttributes } from 'react';

interface lightButtonPropTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: string;
  label: string;
}
/**
 * @param {string} buttonStyle Additional TailwindCSS classes (optional).
 * @param {string} label Button label
 */

// Add icon logo prop
const LightButton = (props: lightButtonPropTypes) => {
  const { buttonStyle, label, ...otherProps } = props;
  return (
    <button
      className={`w-full 
       justify-center text-black text-xl leading-normal items-center  px-1 py-4 space-y-1 bg-custom-pink  hover:bg-opacity-75 active:bg-black-500  border-custom-gray-button-border focus:bg-blue-600 border-1/2 focus:text-white ${buttonStyle}`}
      {...otherProps}
    >
      {label}
    </button>
  );
};

export default LightButton;
