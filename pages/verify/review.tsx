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
import ProgressBar from '../../components/common/ProgressBar';
import SubHeadLine from '../../components/common/SubHeadLine';
import HeadLine from '../../components/common/HeadLine';

const Review: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [trades, setTrades] = useState<Trade[]>([]);

  useEffect(() => {
    async function fetchTrades() {
      // fetch Trades from Binance
      const trades = Array(500).fill({
        id: 6,
        pairId: 'BTC/UDST',
        buy: {
          timestamp: '1695928190',
          quantity: '2.780000000',
          price: '45343'
        },
        sell: {
          timestamp: '1709534876',
          quantity: '2.650000000',
          price: '57123'
        }
      });
      setTrades(trades as Trade[]);
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

      <div className="flex flex-col items-center">
        <div className="3xl:w-6/12   flex h-screen w-7/12 flex-col  md:w-7/12  2xl:w-7/12">
          <ProgressBar stage="6th" />

          <div className="3xl:space-y-14 flex h-screen flex-col space-y-5 text-white 2xl:space-y-10">
            <SubHeadLine text="REVIEW" />

            <HeadLine text="Review your performance" />
            <div className="md:max-h-90 2xl:max-h-115 3xl:max-h-120 h-4/5 overflow-auto 2xl:h-1/2">
              <div className="flex justify-center">
                {/* <div className="w-10/12 2xl:w-auto"> */}
                <TradeStatement trades={trades} />
                {/* </div> */}
              </div>
            </div>
            {/* nav buttons */}

            <div className="flex justify-around pt-10">
              <Link href="/verify/configure">
                <TransparentButton
                  buttonStyle="w-4/12 2xl:w-3/12 text-sm 2xl:text-base 3xl:text-base"
                  label="<< BACK"
                />
              </Link>
              <Link href="/verify/finalize">
                <Button
                  buttonStyle="w-4/12 2xl:w-3/12 text-sm 2xl:text-base 3xl:text-base"
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
