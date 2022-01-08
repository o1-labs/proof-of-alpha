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
       justify-center text-black text-xl leading-normal items-center  px-1 py-4 space-y-1 bg-custom-pink  hover:bg-opacity-75 active:bg-black-500  focus:bg-blue-600  focus:text-white ${inputStyle}`}
      {...otherProps}
    />
  );
};

export default Input;
