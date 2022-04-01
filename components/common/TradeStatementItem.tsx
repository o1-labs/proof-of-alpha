import moment from 'moment';
import { Trade } from '../../types';
import { calculateTradeProfitLoss } from '../../utils';

interface tradeStatementItemProps {
  trade: Trade;
  proofStatement?: boolean;
}
/**
 * @param {array} trades An array of Binance Trade objects
 * @param {booleam} proofStatement Optional boolean indicating a proof statment default is false
 **/

const TradStatementItem = ({
  trade,
  proofStatement
}: tradeStatementItemProps) => {
  const { buy, sell } = trade;

  const renderDate = (timestamp: string) => {
    return moment.unix(parseFloat(timestamp)).format('YYYY MMM DD h:mm:ss ');
  };
  return (
    <div
      className={`flex w-full items-center justify-between px-5 py-3 odd:border-[1px] odd:border-[#676767] md:py-6 md:px-12 3xl:py-7 3xl:px-16   ${
        proofStatement ? 'odd:bg-[#303030]' : ' odd:bg-[#33333380]'
      }`}
    >
      <div className="w-8/12 min-w-fit md:w-7/12">
        <div className="flex justify-between border-b-1/2 border-[#9E9E9E] pb-2 text-[.5rem] font-light md:text-xs 3xl:pb-4 3xl:text-sm">
          <div className="space-x-1 md:space-x-2">
            <span className="">BUY</span>
            <span className="font-extralight">
              {' '}
              @ {parseFloat(buy.price).toLocaleString('en-US')}
            </span>
          </div>{' '}
          <span> {renderDate(buy.timestamp)}</span>
        </div>
        <div className="flex justify-between pt-2 text-[.5rem]  font-light md:space-x-6 md:text-xs 3xl:pt-4 3xl:text-sm ">
          <div className="space-x-1 md:space-x-2">
            <span className="">SELL</span>
            <span className="font-extralight ">
              {' '}
              @ {parseFloat(sell.price).toLocaleString('en-US')}
            </span>
          </div>
          <span className="flex items-end"> {renderDate(sell.timestamp)}</span>
        </div>
      </div>
      <span className="text-lg font-light text-[#00FF19] md:text-1.5xl 3xl:text-3xl">
        + {calculateTradeProfitLoss(trade)}%
      </span>
    </div>
  );
};

export default TradStatementItem;
