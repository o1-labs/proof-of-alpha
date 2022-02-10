import React, { InputHTMLAttributes } from 'react';

interface inputPropTypes extends InputHTMLAttributes<HTMLInputElement> {
  inputStyle?: string;
}
/**
 * @param {string} inputStyle Additional TailwindCSS classes (optional).
 
 */

const Input = (props: inputPropTypes) => {
  const { inputStyle, ...otherProps } = props;
  return (
    <input
      className={`bg-custom-pink 
       active:bg-black-500 w-full items-center justify-center px-4 text-white  hover:bg-opacity-75 focus:bg-[#a7a5a540] focus:text-white focus:outline-blue-400 active:outline-blue-400 md:text-base  2xl:py-3  2xl:text-xl ${inputStyle}`}
      {...otherProps}
    />
  );
};

export default Input;
