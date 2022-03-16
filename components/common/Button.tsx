import React, { ButtonHTMLAttributes } from 'react';

interface buttonPropTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: string;
  label?: string;
  visable?: boolean;
  secondary?: boolean;
  disabled?: boolean;
}
/**
 * @param {string} buttonStyle Additional TailwindCSS classes (optional).
 * @param {string} label Button label (optional)
 * @param {boolean} visable Boolean flag to show or hide Button (optional)
 * @param {boolean} secondary Boolean flag to to change primary button styles defaults to primary (optional)
 * @param {boolean} disabled Boolean flag to disable the button defaults to false (optional)
 **/

const Button = (props: buttonPropTypes) => {
  const {
    buttonStyle,
    label,
    visable,
    secondary,
    children,
    disabled,
    ...otherProps
  } = props;
  const visableStyle = visable === false ? 'hidden' : 'flex';
  const disabledStyle = disabled
    ? 'bg-gray-400 bg-opacity-30 active:none text-gray-500 cursor-not-allowed border-gray-500'
    : 'active:text-custom-gray-button-border border-white text-white';

  const backGroundStyle =
    secondary === true
      ? 'bg-[#FFFFFF1A] hover:bg-white hover:bg-opacity-20 '
      : 'bg-light-black hover:bg-opacity-75';

  return (
    <button
      className={`${visableStyle} ${backGroundStyle} ${disabledStyle}
       line z-10 items-center justify-center  space-x-4 border px-1  py-1 font-normal  leading-loose tracking-xlwidest 2xl:px-3  2xl:py-2  3xl:py-3 3xl:px-4  ${buttonStyle}`}
      disabled={disabled}
      {...otherProps}
    >
      {label}
      {children}
    </button>
  );
};

export default Button;
