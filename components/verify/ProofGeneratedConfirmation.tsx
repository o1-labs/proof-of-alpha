import React from 'react';
import Image from 'next/image';
import ProofCheckMark from '../../public/assets/verify/generate/proof-check.png';

const ProofGeneratedConfirmation = () => {
  return (
    <div className="relative flex flex-col bg-custom-gray-spinner-background rounded-md w-[220px] h-[220px] 2xl:w-[270px] 2xl:h-[270px] items-center justify-center">
      <div className="w-1/2">
        <Image src={ProofCheckMark} />
      </div>
      <p className="absolute  text-[#05ff00] text-center text-xs 2xl:text-base tracking-xlwidest bottom-6 2xl:bottom-8 left-4/12 space-y-[.5px] 2xl:space-y-1 ">
        PROOF GENERATED
      </p>
    </div>
  );
};

export default ProofGeneratedConfirmation;
