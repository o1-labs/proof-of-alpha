'use client';
import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Header from '../../../components/common/Header';
import FetchingTrades from '../../../components/step/5/FetchingTrades';
import TradeStatement from '../../../components/common/TradeStatement';
import { trades } from '../../../utils';
import ProgressBar from '../../../components/common/ProgressBar';
import SubHeadLine from '../../../components/common/SubHeadLine';
import HeadLine from '../../../components/common/HeadLine';
import Layout from '../../../components/common/Layout';
import VerifyBottomNavButtons from '../../../components/common/VerifyBottomNavButtons';

const Review: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [trades, setTrades] = useState<Trade[]>([]);
  useEffect(() => {
    async function fetchTrades() {
      // fetch Trades from Binance
      // setTrades(trades as Trade[]);

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
      layoutStyle="min-container h-1.75*screen min-h-fit pb-30"
    >
      <Header />
      <div className="flex min-h-fit flex-col items-center">
        <div className="flex   h-screen w-7/12 flex-col md:w-7/12  2xl:w-7/12  3xl:w-6/12">
          <ProgressBar stage="6th" />
          <div className="flex h-screen flex-col space-y-5 text-white 2xl:space-y-10 3xl:space-y-14">
            <SubHeadLine text="REVIEW" />
            <HeadLine text="Review your performance" />
            <div className="flex justify-center">
              <TradeStatement trades={trades} />
            </div>
            <VerifyBottomNavButtons
              backNavLink="/step/4"
              continueNavLink="/step/6"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Review;
