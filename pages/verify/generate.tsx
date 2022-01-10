import type { NextPage } from 'next';
import Image from 'next/image';
// import SpinnerPlaceHolder from '../../public/assets/common/spinner-placeholder.png';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import React from 'react';

const Generate: NextPage = () => {
  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat">
      <div className="container w-130 h-screen ml-80">
        <div className="flex flex-col space-y-14 text-white">
          <div className="items-center justify-center">
            {/* <Image src={SpinnerPlaceHolder} /> */}
            <LoadingSpinner />
          </div>
          <p className=" text-5xl">#ZeroKnowledge</p>
          <div>
            <p className="text-3.5xl leading-11 font-light">
              You're generating a zero-knowledge proof revealing
            </p>
            <p className="text-3.5xl leading-11 font-medium">
              2.17% cumulative returns.
            </p>
          </div>
          <div>
            <p className="text-3.5xl leading-11 font-medium">
              The proof is generated locally in your web browser
            </p>
            <p className="text-3.5xl leading-11 font-light">
              and wont reveal your private data (trade size,
            </p>

            <p className="text-3.5xl leading-11 font-light">
              account balance, personal information, etc).
            </p>
          </div>
          <div>
            <p className="text-3.5xl leading-11 font-medium">
              Your proof will be added to Mina's chain, then anyone
            </p>
            <p className="text-3.5xl leading-11 font-light">
              will be able to verify your returns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
