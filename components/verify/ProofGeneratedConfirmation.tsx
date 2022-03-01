import React from 'react';
import Image from 'next/image';
import ProofCheckMark from '../../public/assets/verify/generate/proof-check.png';

const ProofGeneratedConfirmation = () => {
  return (
    <div className=" bg-custom-gray-spinner-background p relative flex h-[220px] w-[220px] flex-col items-center justify-center rounded-lg 2xl:h-[270px] 2xl:w-[270px] ">
      <div className="w-1/2">
        <Image src={ProofCheckMark} alt="check mark" />
      </div>
      <p className="tracking-xlwidest left-4/12  absolute bottom-6 space-y-[.5px]  text-center  text-xs text-[#05ff00] 2xl:bottom-8 2xl:space-y-1 2xl:text-sm ">
        PROOF GENERATED
      </p>
    </div>
  );
};

export default ProofGeneratedConfirmation;
