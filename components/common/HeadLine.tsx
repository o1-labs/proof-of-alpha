import React from 'react';

interface headLineProps {
  text?: string;
  headLineStyle?: string;
  children?: React.ReactNode;
}

/**
 * @param {string} text Header large text
 * @param {string} headLineStyle Additional TailwindCSS classes (optional).
 **/

const HeadLine = (props: headLineProps) => {
  const { text, headLineStyle, children, ...otherProps } = props;
  return (
    <h1
      className={`text-xl font-light tracking-wider md:text-1.5xl 2xl:text-4xl 3xl:text-5xl ${headLineStyle} `}
      {...otherProps}
    >
      {children}
      {text}
    </h1>
  );
};

export default HeadLine;
