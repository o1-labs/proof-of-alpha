import React, { ReactNode } from 'react';

interface containerPropTypes {
  containerStyle?: string;
  children: React.ReactNode;
}

/**
 * @param {string} containerStyle Additional TailwindCSS classes (optional).
 *
 **/

const Container = (props: containerPropTypes) => {
  const { containerStyle, children, ...otherProps } = props;

  return (
    <div className={`container mx-auto  ${containerStyle}`} {...otherProps}>
      {children}
    </div>
  );
};

export default Container;
