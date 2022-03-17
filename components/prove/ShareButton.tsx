import React, { ButtonHTMLAttributes } from 'react';
import Image from 'next/image';
import ShareIcon from '../../public/assets/prove/share-icon.svg';

interface shareButtonPropTypes {
  shareButtonStyle?: string;
  label: string;
}
/**
 * @param {string} shareButtonStyle Additional TailwindCSS classes (optional).
 * @param {string} label Button label
 
 */

// Add icon logo prop
const ShareButton = (props: shareButtonPropTypes) => {
  const { shareButtonStyle, label, ...otherProps } = props;

  return (
    <button
      className={`
        relative w-60  items-center justify-center space-x-4 rounded border border-white bg-light-black px-0 py-1 pr-6 text-xs font-normal   leading-loose tracking-xlwidest text-white hover:bg-opacity-75 active:text-custom-gray-button-border  xl:px-3  xl:py-2 2xl:px-3 2xl:py-2   2xl:pr-7 3xl:py-2 3xl:px-4 3xl:pr-7 3xl:text-base  ${shareButtonStyle}`}
      {...otherProps}
    >
      <div className="flex flex-col">
        <p className="text-left text-sm">SHARE IT</p>

        <p className="-pl-2  text-left text-[8px]">http://urlz.here/3dfdGs</p>
      </div>
      <div
        className="absolute right-7 top-2 w-5 xl:top-4 xl:right-5  2xl:right-4 2xl:top-3 2xl:w-7 3xl:right-5 3xl:top-3 3xl:w-7"
        aria-hidden="true"
      >
        <Image src={ShareIcon} alt="share icon" />
      </div>
    </button>
  );
};

export default ShareButton;
