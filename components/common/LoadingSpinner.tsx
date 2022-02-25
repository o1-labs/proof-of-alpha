import React from 'react';

interface loadingSpinnerPropTypes {
  label: string;
}

/**
 * @param {string} label Text label in the middle of the spinner
 */
const LoadingSpinner = ({ label }: loadingSpinnerPropTypes) => {
  // This method creates a p tag for every word in the label to correctly center in the spinner
  const renderLabel = () => {
    const labelWords = label.split(' ');
    return labelWords.map((word) => {
      return <p key={word}>{word}</p>;
    });
  };

  return (
    <div className="bg-custom-gray-spinner-background relative flex h-[220px] w-[220px]  flex-col items-center justify-center rounded-md 2xl:h-[270px] 2xl:w-[270px]">
      <div className="top-5/12  left-4/12 absolute space-y-[.5px] text-center text-[.6rem] text-[#05ff00] 2xl:space-y-1 ">
        {renderLabel()}
      </div>
      <div className="loadingio-spinner-dual-ring-fv3bcitu1qf">
        <div className="ldio-ir0f41fxdl">
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
