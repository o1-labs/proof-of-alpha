interface headLineProps {
  text: string;
}

/**
 * @param {string} text Header large text
 *
 **/

const HeadLine = (props: headLineProps) => {
  const { text, ...otherProps } = props;
  return (
    <h1
      className="md:text-1.5xl 2xl:text-3.5xl font-medium md:pb-9 2xl:pb-12 2xl:pt-5"
      {...otherProps}
    >
      {text}
    </h1>
  );
};

export default HeadLine;
