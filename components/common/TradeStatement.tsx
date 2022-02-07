import Image from 'next/image';
import moment from 'moment';
import TradeStatementItem from './TradeStatementItem';
import BinanceLogo from '../../public/assets/common/binance-logo.png';
import { calculateCumulativeProfitLoss } from '../../utils';
import { Trade } from '../../types';

interface tradeStatementPropTypes {
  trades: Trade[];
  proofStatement?: boolean;
}
/**
 * @param {array} trades An array of Binance trade objects
 * @param {booleam} proofStatement Optional boolean indicating a proof statment default is false
 **/

const TradeStatement = ({
  trades,
  proofStatement
}: tradeStatementPropTypes) => {
  const renderDates = () => {
    const startDate = new Date();
    const endDate = new Date();
    if (!startDate || !endDate) {
      return null;
    } else
      return `${moment(startDate).format('YYYY.MM.DD')} - ${moment(
        endDate
      ).format('YYYY.MM.DD')}`;
  };

  const renderTrades = (trades: Trade[]) => {
    return trades.map((trade) => {
      return (
        <TradeStatementItem trade={trade} proofStatement={proofStatement} />
      );
    });
  };
  return (
    <div className="w-115 max-w-screen-lg ">
      <div className="flex justify-between">
        {/* logo with date section */}
        <div className="flex w-full flex-col items-start space-y-1 ">
          <div className="flex w-full flex-row items-center space-x-4">
            <Image src={BinanceLogo} alt="Binance logo" />
            <h2 className="text-xl font-medium">BTCUSDT</h2>
          </div>

          <div className="ml-2   flex items-center space-x-6">
            <span className="pl-12 text-lg font-extralight">
              {renderDates()}
            </span>
          </div>
        </div>
        {/* logo with date section */}
        {/* P & L header */}
        <div className="flex w-full flex-col items-end ">
          <span className="text-base">CUMULATIVE PROFIT & LOSS</span>
          <span className="pt-3 text-6xl font-light text-[#14FF00]">
            + {calculateCumulativeProfitLoss(trades)}%
          </span>
        </div>
      </div>
      {/* P & L header */}
      <p className="tracking-xlwidest mb-5 mt-14 text-lg">MY TRANSACTIONS</p>
      {/* trades */}
      <div className="flex flex-col ">{renderTrades(trades)}</div>
      {/* trades */}
    </div>
  );
};

export default TradeStatement;
