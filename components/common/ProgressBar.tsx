interface progressBarPropTypes {
  stage: '1st' | '2nd' | '3rd' | '4th' | '5th' | '6th' | '7th';
}

/**
 * @param {string} stage A string describing what stage the progress bar is showing "1st" | "2nd" | "3rd" | "4th" | "5th" | "6th" | "7th"
 **/

const ProgressBar = (props: progressBarPropTypes) => {
  const { stage, ...otherProps } = props;

  const barWidthClassName = {
    '1st': ['w-1/12', 'w-11/12'],
    '2nd': ['w-2/12', 'w-10/12'],
    '3rd': ['w-4/12', 'w-8/12'],
    '4th': ['w-6/12', 'w-6/12'],
    '5th': ['w-7/12', 'w-5/12'],
    '6th': ['w-9/12', 'w-3/12'],
    '7th': ['w-11/12', 'w-1/12']
  };
  console.log('widths', barWidthClassName[stage][0]);
  return (
    <div className="flex" {...otherProps}>
      <span
        className={`${barWidthClassName[stage][0]} border-t-6  border-white`}
      ></span>
      <span
        className={`${barWidthClassName[stage][1]} border-t-6  border-custom-gray-header-border `}
      ></span>
    </div>
  );
};

export default ProgressBar;
