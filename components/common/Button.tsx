import React, { ButtonHTMLAttributes } from 'react';

interface buttonPropTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: string;
  label: string;
  visable?: boolean;
}
/**
 * @param {string} buttonStyle Additional TailwindCSS classes (optional).
 * @param {string} label Button label
 * @param {boolean} visable Boolean flag to show or hide Button (optional)
 */

// Add icon logo prop
const Button = (props: buttonPropTypes) => {
  const { buttonStyle, label, visable, ...otherProps } = props;

  return (
    <button
      className={`${visable === false ? 'hidden' : 'flex'} 
       justify-center line text-white font-normal leading-loose tracking-xlwidest items-center  px-1 py-1 2xl:px-3 2xl:py-2 3xl:py-3 3xl:px-4 bg-light-black hover:bg-opacity-75 active:text-custom-gray-button-border border border-white space-x-4  ${buttonStyle}`}
      {...otherProps}
    >
      {label}
    </button>
  );
};

export default Button;
