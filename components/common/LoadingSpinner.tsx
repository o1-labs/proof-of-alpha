import { render } from '@headlessui/react/dist/utils/render';
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
      return <p>{word}</p>;
    });
  };

  return (
    <div className="relative flex flex-col bg-custom-gray-spinner-background  w-[220px] h-[220px] 2xl:w-[270px] 2xl:h-[270px] items-center justify-center">
      <div className="absolute  text-[#05ff00] text-center text-xs top-5/12 left-4/12 space-y-[.5px] 2xl:space-y-1 ">
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
