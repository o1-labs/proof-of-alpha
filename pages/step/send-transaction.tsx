import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ProofGeneratedConfirmation from '../../components/step/send-transaction/ProofGeneratedConfirmation';
import Button from '../../components/common/Button';
import LinkIcon from '../../public/assets/common/chain-icon.svg';
import { trades } from '../../utils';
import { calculateCumulativeProfitLoss } from '../../utils';
import Layout from '../../components/common/Layout';
import { Router } from 'next/router';

const Generate: NextPage = () => {
  const [proofConfirmed, setProofConfirmed] = useState<boolean>(false);
  const [cumulativeProfits, setCumulativeProfits] = useState<string>('');

  useEffect(() => {
    const profits = calculateCumulativeProfitLoss(trades);
    setCumulativeProfits(profits);
  }, [trades]);

  useEffect(() => {
    async function fetchProofStatus() {
      // fetch status and setProofConfirmed to true on success => setProofConfirmed(true)
      setTimeout(() => {
        setProofConfirmed(true);
      }, 500);
    }
    fetchProofStatus();
    return () => {
      clearTimeout();
    };
  }, []);

  const renderProofStatus = () => {
    return proofConfirmed ? (
      <ProofGeneratedConfirmation />
    ) : (
      <LoadingSpinner label="GENERATING ZERO-KNOWLEDGE PROOF" />
    );
  };

  const handleSendToMinaButtonClick = async () => {};

  return (
    <Layout backGroundColor="gradient" layoutStyle="h-1.25*screen">
      <div className=" flex  h-screen justify-center">
        <div className="mt-10 flex flex-col space-y-6 text-white 2xl:mt-20 2xl:space-y-10 3xl:mt-36">
          <div className="flex justify-center">{renderProofStatus()}</div>
          <div className="flex justify-center pt-4 text-2xl 2xl:my-11 2xl:text-3xl 3xl:pb-3 3xl:text-4xl">
            #ZeroKnowledge
          </div>
          <div>
            <p className="text-base font-extralight 2xl:text-2xl 3xl:text-3xl 3xl:leading-11">
              You're generating a zero-knowledge proof revealing
            </p>
            <p className="text-base font-normal 2xl:text-2xl 3xl:text-3xl 3xl:leading-11">
              {cumulativeProfits}% cumulative returns.
            </p>
          </div>
          <div>
            <p className="text-base font-normal 2xl:text-xl 3xl:text-3xl 3xl:leading-11">
              The proof is generated locally in your web browser
            </p>
            <p className="text-base font-extralight 2xl:text-2xl 3xl:text-3xl 3xl:leading-11">
              and won't reveal your private data (trade size,
            </p>

            <p className="text-base font-extralight 2xl:text-2xl 3xl:text-3xl  3xl:leading-11">
              account balance, personal information, etc).
            </p>
          </div>
          <div>
            <p className="text-base font-normal 2xl:text-2xl 3xl:text-3xl 3xl:leading-11">
              Your proof will be added to Mina's chain, then anyone
            </p>
            <p className="text-base font-extralight 2xl:text-2xl 3xl:text-3xl  3xl:leading-11">
              will be able to verify your returns.
            </p>
          </div>
          <div className="flex justify-center pt-10">
            {/* Buttton is only visable after a proof is generated 
                // TODO: Add Auro wallet sign tx & send tx flow with dynamic txid
            */}
            <Link href={'/result/2mzdZn7fSGfnJFQXHhamoCyqs56BS5GJKj'} passHref>
              <Button
                buttonStyle="w-10/12 2xl:w-7/12 py-2 3xl:w-6/12 text-sm 2xl:text-base 3xl:text-base"
                visable={proofConfirmed}
                onClick={handleSendToMinaButtonClick}
              >
                <div className="flex w-4 items-center">
                  <Image src={LinkIcon} alt="link icon" />
                </div>
                <div className="px-4">
                  SEND TO MINA &nbsp;
                  {'>>'}
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* </Container> */}
    </Layout>
  );
};

export default Generate;
