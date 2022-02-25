import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Header from '../../components/common/Header';
import FetchingTrades from '../../components/verify/FetchingTrades';
import TradeStatement from '../../components/common/TradeStatement';
import TradeData from '../../trades.json';
import { Trade } from '../../types';
import ProgressBar from '../../components/common/ProgressBar';
import SubHeadLine from '../../components/common/SubHeadLine';
import HeadLine from '../../components/common/HeadLine';
import Layout from '../../components/common/Layout';
import BottomNavButtons from '../../components/verify/BottomNavButtons';

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
          timestamp: '1615928190',
          quantity: '2.780000000',
          price: '45343'
        },
        sell: {
          timestamp: '1639534876',
          quantity: '2.650000000',
          price: '57123'
        }
      });
      setTrades(trades as Trade[]);
      // setTrades(TradeData.trades as Trade[]);
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
    <Layout
      backGroundColor="gradient"
      layoutStyle="h-1.75*screen min-h-fit pb-30"
    >
      <Header />
      <div className="flex min-h-fit flex-col items-center">
        <div className="3xl:w-6/12   flex h-screen w-7/12 flex-col  md:w-7/12  2xl:w-7/12">
          <ProgressBar stage="6th" />
          <div className="3xl:space-y-14 flex h-screen flex-col space-y-5 text-white 2xl:space-y-10">
            <SubHeadLine text="REVIEW" />
            <HeadLine text="Review your performance" />
            <div className="flex justify-center">
              <TradeStatement trades={trades} />
            </div>
            <BottomNavButtons
              backNavLink="/verify/configure"
              continueNavLink="/verify/finalize"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Review;
