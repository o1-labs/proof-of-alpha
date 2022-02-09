import React, { ReactNode } from 'react';

interface titleItemProps {
  text: string;
}

/**
 * @param {string} text Header large text
 *
 **/

const TitleItem = (props: titleItemProps) => {
  const { text, ...otherProps } = props;
  return (
    <h2
      className="md:text-1.5xl 2xl:text-3.5xl 3xl:text-4xl font  mt-12 font-extrabold tracking-widest"
      {...otherProps}
    >
      {text}
    </h2>
  );
};

export default TitleItem;
