import React, { ButtonHTMLAttributes } from 'react';

interface lightButtonPropTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: string;
  label: string;
  selected?: boolean;
  lightButtonStyle?: string;
}
/**
 * @param {string} lightButtonStyle Additional TailwindCSS classes (optional).
 * @param {string} label Button label
 * @param {boolean} selected Boolean if button is selected or active
 */

// Add icon logo prop
const LightButton = (props: lightButtonPropTypes) => {
  const { buttonStyle, label, lightButtonStyle, selected, ...otherProps } =
    props;
  return (
    <button
      className={`${
        selected ? 'bg-[#254298] text-white' : 'bg-custom-pink text-black'
      } 
       active:bg-black-500  border-custom-gray-button-border border-1/2  w-full items-center justify-center py-2  text-xs  leading-normal hover:bg-opacity-75  focus:bg-[#254298] focus:text-white 2xl:py-4 2xl:text-xl ${lightButtonStyle}`}
      {...otherProps}
    >
      {label}
    </button>
  );
};

export default LightButton;
