'use client';
import type { NextPage } from 'next';
import TradeHistorySection from '../components/home/TradeHistorySection';
import ProofSection from '../components/home/ProofSection';
import ExchangeTradeSection from '../components/home/ExchangeTradeSection';

const Home: NextPage = () => {
  return (
    <>
      <TradeHistorySection />
      <ProofSection />
      <ExchangeTradeSection />
    </>
  );
};

export default Home;
