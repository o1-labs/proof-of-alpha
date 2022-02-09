import React, { ReactNode } from 'react';

interface layoutPropTypes {
  backGroundColor: 'gradient' | 'blue' | 'red' | 'gray' | 'grayGradient';
  layoutStyle?: string;
  children: React.ReactNode;
}

/**
 * @param {string} backGroundColor Background color 'gradient' | 'blue' | 'red' | 'gray-gradient' | 'gray'
 * @param {string} layoutStyle Additional TailwindCSS classes (optional).
 *
 **/

const Layout = (props: layoutPropTypes) => {
  const { backGroundColor, layoutStyle, children, ...otherProps } = props;

  const backGroundColorClassName = {
    gradient: 'bg-background',
    blue: 'bg-blue-background',
    red: 'bg-red-background',
    gray: 'bg-prove-share-background',
    grayGradient: 'bg-prove-background'
  };

  return (
    <div
      className={` ${backGroundColorClassName[backGroundColor]}  h-screen*2 w-screen bg-cover bg-no-repeat text-white ${layoutStyle}`}
      {...otherProps}
    >
      {/* <div className="3xl:max-w-screen-2xl mx-auto w-9/12 min-w-min items-center sm:max-w-screen-sm  2xl:max-w-screen-2xl"> */}
      {children}
      {/* </div> */}
    </div>
  );
};

export default Layout;
