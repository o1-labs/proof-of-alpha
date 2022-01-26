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
    <div className="relative flex flex-col bg-custom-gray-spinner-background w-96 h-96 items-center justify-center">
      <div className="absolute  text-[#05ff00] text-center top-5/12 left-4/12">
        {/* <p>labelWords[0]</p>
        <p>ZERO-KNOWLEDGE</p>
        <p>PROOF</p> */}
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
