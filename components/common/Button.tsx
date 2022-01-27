import React, { ButtonHTMLAttributes } from 'react';

interface buttonPropTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: string;
  label: string;
  visable?: boolean;
  primary?: boolean;
}
/**
 * @param {string} buttonStyle Additional TailwindCSS classes (optional).
 * @param {string} label Button label
 * @param {boolean} visable Boolean flag to show or hide Button (optional)
 * @param {boolean} primary Boolean flag to to change primary button styles defaults to primary
 **/

// Add icon logo prop
const Button = (props: buttonPropTypes) => {
  const { buttonStyle, label, visable, primary, ...otherProps } = props;
  console.log('primary', primary);

  return (
    <button
      className={`${visable === false ? 'hidden' : 'flex'} ${
        primary === false ? 'bg-[#FFFFFF1A]' : 'bg-light-black'
      } 
       justify-center line text-white font-normal leading-loose tracking-xlwidest items-center  px-1 py-1 2xl:px-3 2xl:py-2 3xl:py-3 3xl:px-4  hover:bg-opacity-75 active:text-custom-gray-button-border border border-white space-x-4  ${buttonStyle}`}
      {...otherProps}
    >
      {label}
    </button>
  );
};

export default Button;
