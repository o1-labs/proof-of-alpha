import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ProofGeneratedConfirmation from '../../components/verify/ProofGeneratedConfirmation';
import Button from '../../components/common/Button';
import LinkIcon from '../../public/assets/common/link-icon.png';

import TradeData from '../../trades.json';
import { Trade } from '../../types';
import { calculateCumulativeProfitLoss } from '../../utils';
import Layout from '../../components/common/Layout';
import Container from '../../components/common/Container';

const Generate: NextPage = () => {
  const [proofConfirmed, setProofConfirmed] = useState<boolean>(false);
  const [trades, setTrades] = useState<Trade[]>([]);
  const [cumulativeProfits, setCumulativeProfits] = useState<string>('');
  useEffect(() => {
    setTrades(TradeData.trades as Trade[]);
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

  return (
    <Layout backGroundColor="gradient" layoutStyle="h-1.25*screen">
      <div className=" flex  h-screen justify-center">
        <div className="3xl:mt-36 mt-10 flex flex-col space-y-6 text-white 2xl:mt-20 2xl:space-y-10">
          <div className="flex justify-center">{renderProofStatus()}</div>
          <div className="3xl:text-4xl 3xl:pb-3 flex justify-center pt-4 text-2xl 2xl:my-11 2xl:text-3xl">
            #ZeroKnowledge
          </div>
          <div>
            <p className="3xl:text-3xl 3xl:leading-11 text-base font-extralight 2xl:text-2xl">
              You're generating a zero-knowledge proof revealing
            </p>
            <p className="3xl:text-3xl 3xl:leading-11 text-base font-normal 2xl:text-2xl">
              {cumulativeProfits}% cumulative returns.
            </p>
          </div>
          <div>
            <p className="3xl:text-3xl 3xl:leading-11 ffont-normal text-base 2xl:text-xl">
              The proof is generated locally in your web browser
            </p>
            <p className="3xl:text-3xl 3xl:leading-11 text-base font-extralight 2xl:text-2xl">
              and won't reveal your private data (trade size,
            </p>

            <p className="3xl:text-3xl 3xl:leading-11 text-base font-extralight  2xl:text-2xl">
              account balance, personal information, etc).
            </p>
          </div>
          <div>
            <p className="3xl:text-3xl 3xl:leading-11 text-base font-normal 2xl:text-2xl">
              Your proof will be added to Mina's chain, then anyone
            </p>
            <p className="3xl:text-3xl 3xl:leading-11 text-base font-extralight  2xl:text-2xl">
              will be able to verify your returns.
            </p>
          </div>
          <div className="flex justify-center pt-10">
            {/* Buttton is only visable after a proof is generated */}
            <Link href={'/verify/confirm'}>
              <Button
                buttonStyle="w-10/12 2xl:w-7/12 py-2 3xl:w-6/12 text-sm 2xl:text-base 3xl:text-base"
                visable={proofConfirmed}
              >
                <div className="flex w-4 items-center">
                  <Image src={LinkIcon} />
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
