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
    <div
      className="3xl:w-124
     xl:w-108 w-full "
    >
      <div className="mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="mx-auto w-10/12">
          {/* logo with date section */}
          <div className="3xl:space-x-4  flex w-auto justify-center space-x-2  md:w-10/12  md:justify-start xl:space-x-2">
            <div className="3xl:h- 3xl:w-9 h-5 w-5 md:h-4 md:w-4">
              <Image src={BinanceLogo} alt="Binance logo" />
            </div>
            <div className="flex flex-col items-start  ">
              <h2 className="3xl:text-lg tracking-xlwidest text-xs font-medium md:text-sm">
                BTCUSDT
              </h2>
              <span className="3xl:text-lg text-[.5rem] font-extralight md:text-xs  xl:text-sm">
                {renderDates()}
              </span>
            </div>
          </div>
          {/* logo with date section */}
        </div>
        {/* P & L header */}
        <div className="mt-6 flex w-full flex-col items-center md:mt-0 md:items-end">
          <span className="3xl:text-base text-[.45rem] font-thin tracking-widest  md:text-sm">
            TOTAL PROFIT & LOSS
          </span>
          <span className="text-3.5xl 3xl:text-6xl font-light leading-tight text-[#14FF00] md:pt-3">
            + {calculateCumulativeProfitLoss(trades)}%
          </span>
        </div>
      </div>
      {/* P & L header */}
      <p className="md:tracking-xlwidest 3xl:mt-14 3xl:text-lg 3xl:mb-5 mb-3 mt-8 text-left text-[.5rem] font-thin tracking-widest md:mt-6 md:mb-4 md:text-base ">
        MY TRANSACTIONS
      </p>
      {/* trades */}
      <div className="md:max-h-108 2xl:max-h-108 3xl:max-h-115 h-4/5 overflow-auto">
        <div className="3xl:text-base flex flex-col text-sm ">
          {renderTrades(trades)}
        </div>
      </div>
      {/* trades */}
    </div>
  );
};

export default TradeStatement;
