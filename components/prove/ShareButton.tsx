import React, { ButtonHTMLAttributes } from 'react';
import Image from 'next/Image';
import ShareIcon from '../../public/assets/prove/share-icon.png';

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
        relative justify-center  text-white bg-light-black font-normal rounded leading-loose text-xs w-60 3xl:text-base tracking-xlwidest items-center   px-0 py-1 2xl:px-3 2xl:py-2 3xl:py-2  pr-6  3xl:px-2 2xl:pr-7 3xl:pr-7   hover:bg-opacity-75 active:text-custom-gray-button-border border border-white space-x-4  ${buttonStyle}`}
      {...otherProps}
    >
      <div className="flex flex-col">
        <p className="text-left text-sm">SHARE IT</p>

        <p className="text-left text-[8px] -pl-2">http://urlz.here/3dfdGs</p>
      </div>
      <div
        className="absolute right-7 2xl:right-4 3xl:right-11 top-2 2xl:top-3  3xl:top-3 w-5 2xl:w-7 3xl:w-7"
        aria-hidden="true"
      >
        <Image src={ShareIcon} />
      </div>
    </button>
  );
};

export default Button;
