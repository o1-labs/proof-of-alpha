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
      className={`w-full 
       justify-center text-white items-center md:text-base 2xl:text-xl px-4  2xl:py-3 bg-custom-pink  hover:bg-opacity-75 active:bg-black-500  focus:bg-[#a7a5a540]  focus:text-white ${inputStyle}`}
      {...otherProps}
    />
  );
};

export default Input;
