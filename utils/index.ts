import { Trade } from '../types';

export const calculateCumulativeProfitLoss = (trades: Trade[]) => {
  const cummulativeProfitLoss = trades
    .reduce((trades, trade) => {
      const tradeProfitLoss =
        ((parseFloat(trade.sell.price) - parseFloat(trade.buy.price)) /
          parseFloat(trade.buy.price)) *
        100;
      return trades + tradeProfitLoss;
    }, 0)
    .toFixed(1);
  return cummulativeProfitLoss;
};

export const calculateTradeProfitLoss = (trade: Trade) => {
  const tradeProfitLoss = (
    ((parseFloat(trade.sell.price) - parseFloat(trade.buy.price)) /
      parseFloat(trade.buy.price)) *
    100
  ).toFixed(1);

  return tradeProfitLoss;
};
