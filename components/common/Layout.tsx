import React, { ReactNode } from 'react';

interface layoutPropTypes {
  backGroundColor: 'gradient' | 'blue' | 'red';
  layoutStyle?: string;
  children: React.ReactNode;
}

/**
 * @param {string} backGroundColor Background color 'gradient' | 'blue' | 'red'
 * @param {string} layoutStyle Additional TailwindCSS classes (optional).
 *
 **/

const Layout = (props: layoutPropTypes) => {
  const { backGroundColor, layoutStyle, children, ...otherProps } = props;
  const backGroundColorClassName = {
    gradient: 'bg-background',
    blue: 'bg-blue-background',
    red: 'bg-red-background'
  };

  return (
    <div
      className={` ${backGroundColorClassName[backGroundColor]} flex h-screen bg-cover bg-no-repeat text-white ${layoutStyle}`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Layout;
