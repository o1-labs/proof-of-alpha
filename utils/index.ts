import { Trade } from '../types';
import moment from 'moment';

export const calculateCumulativeProfitLoss = (trades: Trade[]): string => {
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

export const calculateTradeProfitLoss = (trade: Trade): string => {
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

// Mock trades to be replaced by users Binance Trades
export const trades = Array(500).fill({
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

export const renderDates = (): string => {
  const startDate = new Date();
  const endDate = new Date();
  if (!startDate || !endDate) {
    return null;
  } else
    return `${moment(startDate).format('YYYY.MM.DD')} - ${moment(
      endDate
    ).format('YYYY.MM.DD')}`;
};

export const addQueryParamsToURL = (path: string, params: any): string => {
  const pathResult = new URLSearchParams();
  for (let i = 0; i < params.length; i++) {
    pathResult.append(params[i].label, params[i].value);
  }

  return `${path}?${pathResult}`;
};

export const BASE_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';
