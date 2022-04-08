import Image from 'next/image';
import moment from 'moment';
import TradeStatementItem from './TradeStatementItem';
import BinanceLogo from '../../public/assets/common/binance-logo.svg';
import { calculateCumulativeProfitLoss, renderDates } from '../../utils';
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
  const renderTrades = (trades: Trade[]) => {
    return trades.map((trade, index) => {
      return (
        <TradeStatementItem
          key={index}
          trade={trade}
          proofStatement={proofStatement}
        />
      );
    });
  };
  return (
    <div
      className="w-full
     xl:w-108 3xl:w-124 "
    >
      <div className="mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-between">
        <div className="mx-auto w-10/12 ">
          {/* logo with date section */}
          <div className="flex  w-auto justify-center space-x-2 md:w-10/12  md:justify-start  xl:space-x-2 3xl:space-x-4">
            <div className="3xl:h- h-5 w-5 md:h-4 md:w-4 3xl:w-9">
              <Image src={BinanceLogo} alt="Binance logo" />
            </div>
            <div className="flex flex-col items-start  ">
              <h2 className="text-xs font-medium tracking-xlwidest lg:text-sm 3xl:text-lg">
                BTCUSDT
              </h2>
              <span className="text-[.5rem] font-extralight lg:text-xs xl:text-sm  3xl:text-lg">
                {renderDates()}
              </span>
            </div>
          </div>
          {/* logo with date section */}
        </div>
        {/* P & L header */}
        <div className="mt-6 flex w-full flex-col items-center lg:mt-0 lg:items-end">
          <span className="text-[.45rem] font-thin tracking-widest lg:text-sm  3xl:text-base">
            TOTAL PROFIT & LOSS
          </span>
          <span className="text-3.5xl font-light leading-tight text-[#14FF00] md:pt-3 3xl:text-6xl">
            + {calculateCumulativeProfitLoss(trades)}%
          </span>
        </div>
      </div>
      {/* P & L header */}
      <p className="mb-3 mt-8 text-left text-[.5rem] font-thin tracking-widest md:tracking-xlwidest lg:mt-6 lg:mb-4 lg:text-base 3xl:mt-14 3xl:mb-5 3xl:text-lg ">
        MY TRANSACTIONS
      </p>
      {/* trades */}
      <div className="h-4/5 max-h-[412px] overflow-auto md:max-h-108 2xl:max-h-108 3xl:max-h-115">
        <div className="flex flex-col text-sm 3xl:text-base ">
          {renderTrades(trades)}
        </div>
      </div>
      {/* trades */}
    </div>
  );
};

export default TradeStatement;
