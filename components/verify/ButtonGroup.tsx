import LightButton from '../common/LightButton';
import React from 'react';

const ButtonGroup = () => {
  return (
    <div className="flex items-center">
      <span className="text-4xl leading-loose  w-1/3">Date range</span>
      <div className="flex w-2/3">
        <LightButton buttonStyle={'rounded-l w-1/4'} label="LAST 30 DAYS" />
        <LightButton buttonStyle="w-1/4" label="LAST 90 DAYS" />
        <LightButton buttonStyle="w-1/4" label="LAST YEAR" />
        <LightButton buttonStyle="rounded-r w-1/4" label="FULL HISTORY" />
      </div>
    </div>
  );
};

export default ButtonGroup;
