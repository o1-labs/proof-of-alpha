import react, { useEffect, useState } from 'react';
import TradeStatement from '../common/TradeStatement';
import TradeData from '../../trades.json';
import { Trade } from '../../types';

const ProofOfAlphaStatement = () => {
  const [trades, setTrades] = useState<Trade[]>([]);
  useEffect(() => {
    // Used to test statement output with 500 transactions
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
  }, []);
  return (
    <div className="3xl:px-28 3xl:py-20 z-10 w-full bg-[#404040E5] px-6 py-8 text-center md:py-16 md:px-20 md:text-left">
      <p className="tracking-xlwidest 3xl:text-2xl 3xl:mb-4 mb-2 text-center text-xl md:text-left md:text-base">
        <span className="block  md:inline">PROOF-OF-ALPHA</span>{' '}
        <span className="block font-extralight md:inline">STATEMENT</span>
      </p>
      <p className="3xl:text-lg 3xl:mb-12 mb-10 text-xs text-[.5rem] font-extralight tracking-wider md:tracking-wide">
        CERTIFIED AND VALIDATED ON-CHAIN
      </p>
      <TradeStatement trades={trades} proofStatement />
      <p className="md:tracking-xlwidest 3xl:text-base mt-20 text-center text-[.5rem] font-thin tracking-widest md:text-sm md:font-normal">
        VALIDATED ON THE MINA BLOCKCHAIN
      </p>
    </div>
  );
};

export default ProofOfAlphaStatement;
