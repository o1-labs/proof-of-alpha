interface subHeadLineProps {
  text: string;
}

/**
 * @param {string} text Header large text
 *
 **/

const SubHeadLine = (props: subHeadLineProps) => {
  const { text, ...otherProps } = props;
  return (
    <h2 className="mt-2 text-sm tracking-wider 2xl:text-lg" {...otherProps}>
      {text}
    </h2>
  );
};

export default SubHeadLine;
