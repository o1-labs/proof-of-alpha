import React from 'react';

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
    <div
      className={` max-width-[900px] mx-auto flex  w-full min-w-min flex-col md:w-10/12  xl:w-9/12 xl:max-w-[960px] 2xl:w-8/12 2xl:max-w-[990px] 3xl:w-7/12 3xl:max-w-[1450px] ${containerStyle}`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Container;
