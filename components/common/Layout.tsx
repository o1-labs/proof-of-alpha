import React, { ReactNode } from 'react';

interface layoutPropTypes {
  backGroundColor: 'gradient' | 'blue' | 'red' | 'gray' | 'grayGradient';
  children: React.ReactNode;
  id?: string;
  layoutStyle?: string;
}

/**
 * @param {string} backGroundColor Background color 'gradient' | 'blue' | 'red' | 'gray-gradient' | 'gray'
 * @param {string} layoutStyle Additional TailwindCSS classes (optional).
 *
 **/

const Layout = (props: layoutPropTypes) => {
  const { backGroundColor, layoutStyle, children, id, ...otherProps } = props;

  const backGroundColorClassName = {
    gradient: 'bg-background',
    blue: 'bg-blue-background',
    red: 'bg-red-background',
    gray: 'bg-prove-share-background',
    grayGradient: 'bg-prove-background'
  };

  return (
    <div
      className={` ${backGroundColorClassName[backGroundColor]}  w-screen overflow-x-hidden overflow-y-hidden bg-cover bg-no-repeat object-cover text-white ${layoutStyle}`}
      id={id}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Layout;
