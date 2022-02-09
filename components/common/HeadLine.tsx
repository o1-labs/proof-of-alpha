interface headLineProps {
  text: string;
  headLineStyle?: string;
}

/**
 * @param {string} text Header large text
 * @param {string} headLineStyle Additional TailwindCSS classes (optional).
 **/
// 'text-1.5xl 2xl:text-3.5xl 3xl:text-4xl font-medium';
const HeadLine = (props: headLineProps) => {
  const { text, headLineStyle, ...otherProps } = props;
  return (
    <h1
      className={`md:text-1.5xl 3xl:text-4.5xl tracking-wider 2xl:text-4xl ${headLineStyle} `}
      {...otherProps}
    >
      {text}
    </h1>
  );
};

export default HeadLine;
