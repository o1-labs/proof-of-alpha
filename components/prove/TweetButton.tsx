import React, { ButtonHTMLAttributes } from 'react';
import Image from 'next/Image';
import TwitterLogo from '../../public/assets/prove/twitter-logo.png';

interface buttonPropTypes {
  buttonStyle?: string;
  label: string;
}
/**
 * @param {string} buttonStyle Additional TailwindCSS classes (optional).
 * @param {string} label Button label
 
 */

// Add icon logo prop
const Button = (props: buttonPropTypes) => {
  const { buttonStyle, label, ...otherProps } = props;

  return (
    <button
      className={`
        relative justify-center  text-[#00FF19] font-normal leading-loose text-xs 3xl:text-base tracking-xlwidest items-center   px-0 py-1 2xl:px-3 2xl:py-2 3xl:py-2  pr-6  3xl:px-2 2xl:pr-7 3xl:pr-7  bg-[#FFFFFF1A] hover:bg-opacity-75 active:text-custom-gray-button-border border border-[#00FF19] space-x-4  ${buttonStyle}`}
      {...otherProps}
    >
      {label}
      <div
        className="absolute right-7 2xl:right-11 3xl:right-11 top-2 2xl:top-3  3xl:top-3 w-5 2xl:w-7 3xl:w-7"
        aria-hidden="true"
      >
        <Image src={TwitterLogo} />
      </div>
    </button>
  );
};

export default Button;
