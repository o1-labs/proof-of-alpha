import React from 'react';
import type { NextPage } from 'next';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const Generate: NextPage = () => {
  return (
    <div className="flex min-h-screen bg-background bg-cover bg-no-repeat justify-center">
      <div className="flex container  h-screen justify-center">
        <div className="flex flex-col space-y-6 2xl:space-y-14 text-white mt-10 2xl:mt-20 3xl:mt-36">
          <div className="flex justify-center">
            <LoadingSpinner label="GENERATING ZERO-KNOWLEDGE PROOF" />
          </div>
          <div className="flex text-2xl 2xl:text-3xl 3xl:text-5xl justify-center 2xl:my-11">
            #ZeroKnowledge
          </div>
          <div>
            <p className="text-base 2xl:text-2xl 3xl:text-3.5xl 3xl:leading-11 font-light">
              You're generating a zero-knowledge proof revealing
            </p>
            <p className="text-base 2xl:text-2xl 3xl:text-3.5xl 3xl:leading-11 font-bold">
              2.17% cumulative returns.
            </p>
          </div>
          <div>
            <p className="text-base 2xl:text-xl 3xl:text-3.5xl 3xl:leading-11 font-bold">
              The proof is generated locally in your web browser
            </p>
            <p className="text-base 2xl:text-2xl 3xl:text-3.5xl 3xl:leading-11 font-light">
              and wont reveal your private data (trade size,
            </p>

            <p className="text-base 2xl:text-2xl 3xl:text-3.5xl 3xl:leading-11  font-light">
              account balance, personal information, etc).
            </p>
          </div>
          <div>
            <p className="text-base 2xl:text-2xl 3xl:text-3.5xl 3xl:leading-11 font-bold">
              Your proof will be added to Mina's chain, then anyone
            </p>
            <p className="text-base 2xl:text-2xl 3xl:text-3.5xl 3xl:leading-11  font-light">
              will be able to verify your returns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
