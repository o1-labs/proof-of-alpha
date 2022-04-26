import React from 'react';
import Image from 'next/image';
import ProofCheckMark from '../../../public/assets/step/send-transaction/proof-check.png';

const ProofGeneratedConfirmation = () => {
  return (
    <div className="p relative flex h-[220px] w-[220px] flex-col items-center justify-center rounded-lg bg-custom-gray-spinner-background 2xl:h-[270px] 2xl:w-[270px] ">
      <div className="w-1/2">
        <Image src={ProofCheckMark} alt="check mark" />
      </div>
      <p className="left-4/12 absolute  bottom-6 space-y-[.5px] text-center  text-xs  tracking-xlwidest text-[#05ff00] 2xl:bottom-8 2xl:space-y-1 2xl:text-sm ">
        PROOF GENERATED
      </p>
    </div>
  );
};

export default ProofGeneratedConfirmation;
