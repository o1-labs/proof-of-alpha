import crypto from 'crypto';

export async function getTrades(parsedRequest) {
  // TODO: use api keys as default if users does not want to use their own.

  const BINANCE_BASE_URL = 'https://api.binance.com';

  const { tradingPair, timeFrame, binanceKey, binanceSecret } = parsedRequest;

  // Timestamp in ms.
  // TODO: calculate trade history start date from option selected in ui.
  const startTime = Date.now() - timeFrame * 24 * 60 * 60 * 1000;

  const endTime = await fetch(`${BINANCE_BASE_URL}/api/v3/time`)
    .then((res) => res.json())
    .then((data) => data.serverTime);

  const query = `symbol=${tradingPair}&startTime=${startTime}&timestamp=${endTime}`;

  const signature = crypto
    .createHmac('sha256', binanceSecret)
    .update(query)
    .digest('hex');

  const url = `${BINANCE_BASE_URL}/api/v3/myTrades?${query}&signature=${signature}`;

  const trades = await fetch(url, {
    method: 'GET',
    headers: { 'X-MBX-APIKEY': binanceKey }
  }).then((res) => res.json());

  return trades;
}
