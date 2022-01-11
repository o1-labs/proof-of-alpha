import React from 'react';
import type { NextPage } from 'next';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const Generate: NextPage = () => {
  return (
    <div className="flex min-h-screen bg-background bg-cover bg-no-repeat justify-center">
      <div className="flex container w-130 h-screen justify-center">
        <div className="flex flex-col space-y-14 text-white mt-36">
          <div className="flex justify-center">
            <LoadingSpinner />
          </div>
          <div className="flex text-5xl justify-center my-11">
            #ZeroKnowledge
          </div>
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
