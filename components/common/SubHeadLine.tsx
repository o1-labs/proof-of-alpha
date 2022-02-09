interface subHeadLineProps {
  text: string;
  subHeadLineStyle?: string;
}

/**
 * @param {string} text Header large text
 *@param {string} subHeadLineStyle
 **/

const SubHeadLine = (props: subHeadLineProps) => {
  const { text, subHeadLineStyle, ...otherProps } = props;
  return (
    <h2
      className={`mt-2 text-sm tracking-wider 2xl:text-lg ${subHeadLineStyle}`}
      {...otherProps}
    >
      {text}
    </h2>
  );
};

export default SubHeadLine;
