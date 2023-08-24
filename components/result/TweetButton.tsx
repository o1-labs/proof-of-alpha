import React, { ButtonHTMLAttributes } from 'react';
import Image from "next/legacy/image";
import TwitterLogo from '../../public/assets/result/twitter-logo.svg';

interface tweetButtonPropTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: string;
  label: string;
}
/**
 * @param {string} buttonStyle Additional TailwindCSS classes (optional).
 * @param {string} label Button label
 */

const TweetButton = (props: tweetButtonPropTypes) => {
  const { buttonStyle, label, ...otherProps } = props;

  return (
    <button
      className={`
        relative items-center  justify-center space-x-4 border border-[#00FF19] bg-[#FFFFFF1A] px-0 py-2  pr-6 text-[.6rem] font-normal leading-loose tracking-xlwidest text-[#00FF19]  hover:bg-[#00FF19] hover:bg-opacity-[.075] active:text-custom-gray-button-border lg:py-3 lg:text-xs 2xl:px-3  2xl:py-3 2xl:pr-7 3xl:py-3 3xl:px-2 3xl:pr-12 3xl:text-base  ${buttonStyle}`}
      {...otherProps}
    >
      {label}
      <div
        className="absolute right-7 top-3 w-4  lg:w-5 2xl:right-11 2xl:w-6 3xl:w-7"
        aria-hidden="true"
      >
        <Image src={TwitterLogo} alt="twitter logo" />
      </div>
    </button>
  );
};

export default TweetButton;
