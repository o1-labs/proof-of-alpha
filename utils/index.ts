import { Trade } from '../types';

export const calculateCumulativeProfitLoss = (trades: Trade[]) => {
  const cummulativeProfitLoss = trades.reduce((trades, trade) => {
    const tradeProfitLoss =
      ((parseFloat(trade.sell.price) - parseFloat(trade.buy.price)) /
        parseFloat(trade.buy.price)) *
      100;
    return trades + tradeProfitLoss;
  }, 0);

  // This adds comma formating for larger numbers
  return cummulativeProfitLoss.toLocaleString('en-us', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  });
};

export const calculateTradeProfitLoss = (trade: Trade) => {
  const tradeProfitLoss =
    ((parseFloat(trade.sell.price) - parseFloat(trade.buy.price)) /
      parseFloat(trade.buy.price)) *
    100;

  // This adds comma formating for larger numbers
  return tradeProfitLoss.toLocaleString('en-us', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  });
};
