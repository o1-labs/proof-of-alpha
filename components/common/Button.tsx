import React, { ButtonHTMLAttributes } from 'react';

interface buttonPropTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: string;
  label?: string;
  visable?: boolean;
  secondary?: boolean;
}
/**
 * @param {string} buttonStyle Additional TailwindCSS classes (optional).
 * @param {string} label Button label (optional)
 * @param {boolean} visable Boolean flag to show or hide Button (optional)
 * @param {boolean} secondary Boolean flag to to change primary button styles defaults to primary (optional)
 **/

const Button = (props: buttonPropTypes) => {
  const { buttonStyle, label, visable, secondary, children, ...otherProps } =
    props;

  return (
    <button
      className={`${visable === false ? 'hidden' : 'flex'} ${
        secondary === true ? 'bg-[#FFFFFF1A]' : 'bg-light-black'
      } 
       line tracking-xlwidest 3xl:py-3 3xl:px-4 active:text-custom-gray-button-border z-10 items-center justify-center  space-x-4 border border-white px-1 py-1 font-normal  leading-loose text-white hover:bg-opacity-75 2xl:px-3 2xl:py-2  ${buttonStyle}`}
      {...otherProps}
    >
      {label}
      {children}
    </button>
  );
};

export default Button;
