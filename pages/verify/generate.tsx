import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ProofGeneratedConfirmation from '../../components/verify/ProofGeneratedConfirmation';
import Button from '../../components/common/Button';

const Generate: NextPage = () => {
  const [proofConfirmed, setProofConfirmed] = useState<boolean>(true);

  useEffect(() => {
    async function fetchProofStatus() {
      // fetch status and setProofConfirmed to true on success => setProofConfirmed(true)
    }
    return () => {
      // cleanup
    };
  }, []);

  const renderProofStatus = () => {
    return proofConfirmed ? (
      <ProofGeneratedConfirmation />
    ) : (
      <LoadingSpinner label="GENERATING ZERO-KNOWLEDGE PROOF" />
    );
  };

  return (
    <div className="flex min-h-screen bg-background bg-cover bg-no-repeat justify-center">
      <div className="flex container  h-screen justify-center">
        <div className="flex flex-col space-y-6 2xl:space-y-14 text-white mt-10 2xl:mt-20 3xl:mt-36">
          <div className="flex justify-center">{renderProofStatus()}</div>
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
          <div className="flex justify-center">
            {/* Buttton is only visable after a proof is generated */}
            <Button
              label="SEND TO MINA >>"
              buttonStyle="w-1/2 text-xs 2xl:text-xl 3xl:text-2xl"
              visable={proofConfirmed}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
