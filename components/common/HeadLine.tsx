interface headLineProps {
  text: string;
  headLineStyle?: string;
}

/**
 * @param {string} text Header large text
 * @param {string} headLineStyle Additional TailwindCSS classes (optional).
 **/

const HeadLine = (props: headLineProps) => {
  const { text, headLineStyle, ...otherProps } = props;
  return (
    <h1
      className={`md:text-1.5xl 2xl:text-3.5xl font-medium md:pb-9 2xl:pb-12 2xl:pt-5 ${headLineStyle} `}
      {...otherProps}
    >
      {text}
    </h1>
  );
};

export default HeadLine;
