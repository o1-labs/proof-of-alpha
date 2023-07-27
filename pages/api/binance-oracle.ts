import { IncomingMessage, ServerResponse } from 'http';
import { PrivateKey, Field, Signature } from 'snarkyjs';
import crypto from 'crypto';
import { calculateCumulativeProfitLoss } from '../../utils';
import { Trade } from '../../types';
import TradeStatement from '../../components/common/TradeStatement';

const BINANCE_BASE_URL = 'https://api.binance.com';

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {

  const url = new URL(req.url || '/', `http://${req.headers.host}`);

  const timeFrame = url.searchParams.get('time-frame');
  const binanceKey = url.searchParams.get('binance-key');
  const binanceSecret = url.searchParams.get('binance-secret');

  async function getTrades(timeFrame: number) {
    // TODO: use api keys as default if users does not want to use their own.
    const binanceApiKey = process.env.BINANCE_API_KEY;
    const binanceSecretKey = process.env.BINANCE_SECRET_KEY;

    // Timestamp in ms.
    // TODO: calculate trade history start date from option selected in ui.
    const startTime = Date.now() - timeFrame * 24 * 60 * 60 * 1000;

    const endTime = await fetch(`${BINANCE_BASE_URL}/api/v3/time`)
      .then((res) => res.json())
      .then((data) => data.serverTime);

    const query = `symbol=BTCUSDT&startTime=${startTime}&timestamp=${endTime}`;

    const signature = crypto
      .createHmac('sha256', binanceSecretKey)
      .update(query)
      .digest('hex');

    const url = `${BINANCE_BASE_URL}/api/v3/myTrades?${query}&signature=${signature}`;

    const trades = await fetch(url, {
      method: 'GET',
      headers: { 'X-MBX-APIKEY': binanceApiKey }
    }).then((res) => res.json());

    return trades;
  }

  function calculateAlpha(trades: Trade[]) {
    return calculateCumulativeProfitLoss(trades);
  }

  const trades = await getTrades(90);

  return res.json(trades);
}
