import React, { ButtonHTMLAttributes } from 'react';
import Image from 'next/image';
import TwitterLogo from '../../public/assets/prove/twitter-logo.png';

interface tweetButtonPropTypes {
  buttonStyle?: string;
  label: string;
}
/**
 * @param {string} buttonStyle Additional TailwindCSS classes (optional).
 * @param {string} label Button label
 
 */

// Add icon logo prop
const TweetButton = (props: tweetButtonPropTypes) => {
  const { buttonStyle, label, ...otherProps } = props;

  return (
    <button
      className={`
        relative items-center  justify-center space-x-4 border border-[#00FF19] bg-[#FFFFFF1A] px-0 py-1  pr-6 text-xs font-normal leading-loose tracking-xlwidest text-[#00FF19]  hover:bg-[#00FF19] hover:bg-opacity-[.075]  active:text-custom-gray-button-border 2xl:px-3  2xl:py-2 2xl:pr-7 3xl:py-3 3xl:px-2 3xl:pr-12 3xl:text-base  ${buttonStyle}`}
      {...otherProps}
    >
      {label}
      <div
        className="absolute right-7 top-2 w-5 2xl:right-11 2xl:top-3  2xl:w-7 3xl:right-11 3xl:top-3 3xl:w-7"
        aria-hidden="true"
      >
        <Image src={TwitterLogo} alt="twitter logo" />
      </div>
    </button>
  );
};

export default TweetButton;
