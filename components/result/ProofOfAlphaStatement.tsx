import { useEffect, useState } from 'react';
import TradeStatement from '../common/TradeStatement';
import { Trade } from '../../types';

interface proofOfAlphaStatemtPropTypes {
  txid: string | string[];
}
const ProofOfAlphaStatement = ({ txid }: proofOfAlphaStatemtPropTypes) => {
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
    <div className="z-10 w-full bg-[#404040E5] px-6 py-8 text-center lg:py-16 lg:px-20 lg:text-left 3xl:px-28 3xl:py-20">
      <p className="mb-2 text-center text-xl tracking-xlwidest md:text-base lg:text-left 3xl:mb-4 3xl:text-2xl">
        <span className="block  lg:inline">PROOF-OF-ALPHA</span>{' '}
        <span className="block font-extralight lg:inline">STATEMENT</span>
      </p>
      <p className="mb-10 text-xs text-[.5rem] font-extralight tracking-wider md:tracking-wide 3xl:mb-12 3xl:text-lg">
        CERTIFIED AND VALIDATED ON-CHAIN
      </p>
      <TradeStatement trades={trades} proofStatement />
      <a
        className="hover:underline"
        target="_blank"
        href={`https://berkeley.minaexplorer.com/transaction/${txid}`}
      >
        <p className="mt-20 text-center text-[.5rem] font-thin tracking-widest md:text-sm md:font-normal md:tracking-xlwidest 3xl:text-base">
          VALIDATED ON THE MINA BLOCKCHAIN
        </p>
      </a>
    </div>
  );
};

export default ProofOfAlphaStatement;
