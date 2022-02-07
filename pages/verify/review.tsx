import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import Button from '../../components/common/Button';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import TransparentButton from '../../components/common/TransparentButton';
import Header from '../../components/common/Header';
import BinanaceTransactions from '../../public/assets/verify/review/binance-transactions.png';
import FetchingTrades from '../../components/verify/FetchingTrades';
import TradeStatement from '../../components/common/TradeStatement';
import TradeData from '../../trades.json';
import { Trade } from '../../types';

const Review: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [trades, setTrades] = useState<Trade[]>([]);

  useEffect(() => {
    async function fetchTrades() {
      // fetch Trades from Binance
      setTrades(TradeData.trades as Trade[]);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
      // setLoading isLoading to false once payload is recieved
    }
    fetchTrades();
    return () => {
      clearTimeout();
    };
  }, []);
  if (isLoading) {
    return <FetchingTrades />;
  }

  return (
    <div className="bg-background min-h-screen bg-cover bg-no-repeat">
      <Header />
      {/* progress bar */}
      <div className="flex flex-col items-center">
        <div className="3xl:w-6/12 container  flex h-screen w-7/12 flex-col  md:w-7/12  2xl:w-7/12">
          <div className="flex">
            <span className="border-t-6  w-11/12 border-white "></span>
            <span className="border-t-6  border-custom-gray-header-border w-1/12"></span>
          </div>
          {/* progress bar end */}

          <div className="3xl:space-y-14 flex h-screen flex-col space-y-5 text-white 2xl:space-y-10">
            <p className="3xl:text-xl mt-2 text-sm tracking-wider 2xl:text-lg">
              REVIEW
            </p>

            <p className="text-1.5xl 2xl:text-3.5xl 3xl:text-4xl font-medium">
              Review your performance
            </p>
            <div className="h-2/5 max-h-screen overflow-auto 2xl:h-1/2">
              <div className="flex justify-center">
                <div className="w-10/12 2xl:w-auto">
                  {/* <Image src={BinanaceTransactions}></Image> */}
                  <TradeStatement trades={trades} />
                </div>
              </div>
            </div>
            {/* nav buttons */}
            <div className="mr-18 3xl:mr-86 flex justify-between pt-10 2xl:mr-52 2xl:pt-0">
              <Link href="/verify/configure">
                <TransparentButton
                  buttonStyle="w-4/12 2xl:w-3/12 text-sm 2xl:text-xl 3xl:text-2xl"
                  label="<< BACK"
                />
              </Link>
              <Link href="/verify/finalize">
                <Button
                  buttonStyle="w-4/12 2xl:w-3/12 text-sm 2xl:text-base 3xl:text-lg 3xl:w-4/12"
                  label="CONTINUE  >>"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
