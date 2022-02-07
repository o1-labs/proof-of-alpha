import react, { useEffect, useState } from 'react';
import TradeStatement from '../common/TradeStatement';
import TradeData from '../../trades.json';
import { Trade } from '../../types';

const ProofOfAlphaStatement = () => {
  const [trades, setTrades] = useState<Trade[]>([]);
  useEffect(() => {
    setTrades(TradeData.trades as Trade[]);
  }, []);
  return (
    <div className="px-30 bg-[#404040E5] py-24">
      <p className="tracking-xlwidest mb-5 text-2xl">
        <span className="font-medium">PROOF-OF-ALPHA</span>{' '}
        <span className="font-extralight">STATMENT</span>
      </p>
      <p className="tracking-xlwidest mb-14 text-lg font-extralight">
        CERTIFIED AND VALIDATED ON-CHAIN
      </p>
      <div className="max-h-99 h-2/5 overflow-auto 2xl:h-1/2">
        {/* <div className="flex justify-center"> */}
        <div className="z-10 w-2/12 2xl:w-auto">
          <TradeStatement trades={trades} proofStatement />
        </div>
        {/* </div> */}
      </div>
      <p className="tracking-xlwidest mt-12 items-center text-center">
        VALIDATED ON THE MINA BLOCKCHAIN
      </p>
    </div>
  );
};

export default ProofOfAlphaStatement;
