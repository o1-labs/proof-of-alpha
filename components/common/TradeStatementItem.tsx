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
  // const calculateTradeProfitLoss = (trade: Trade) => {
  //   const tradeProfitLoss = (
  //     ((parseFloat(trade.sell.price) - parseFloat(trade.buy.price)) /
  //       parseFloat(trade.buy.price)) *
  //     100
  //   ).toFixed(1);

  //   return tradeProfitLoss;
  // };

  const renderDate = (timestamp: string) => {
    return moment.unix(parseFloat(timestamp)).format('YYYY MMM DD h:mm:ss ');
  };
  return (
    <div
      className={`flex w-full items-center justify-between px-16 py-7 odd:border-2 odd:border-[#676767]  ${
        proofStatement ? 'odd:bg-[#303030]' : ' odd:bg-[#33333380]'
      }`}
    >
      <div className="w-7/12">
        <div className="border-b-1/2 flex justify-between pb-4 text-sm font-light">
          <div className="space-x-2">
            <span className="">BUY</span>
            <span className="font-extralight">
              {' '}
              @ {parseFloat(buy.price).toLocaleString('en-US')}
            </span>
          </div>
          <span> {renderDate(buy.timestamp)}</span>
        </div>
        <div className="flex justify-between  pt-4 text-sm font-light">
          <div className="space-x-2">
            <span className="">SELL</span>
            <span className="font-extralight ">
              {' '}
              @ {parseFloat(sell.price).toLocaleString('en-US')}
            </span>
          </div>
          <span className="flex items-end"> {renderDate(sell.timestamp)}</span>
        </div>
      </div>
      <span className="text-3xl font-light text-[#00FF19]">
        + {calculateTradeProfitLoss(trade)}%
      </span>
    </div>
  );
};

export default TradStatementItem;
