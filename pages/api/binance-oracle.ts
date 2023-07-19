import { IncomingMessage, ServerResponse } from 'http';
import { PrivateKey, Field, Signature } from 'snarkyjs';
import jwt from 'jsonwebtoken';

const BINANCE_BASE_URL = 'https://api.binance.com';

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  // TODO: use api keys as default if users does not want to use their own.
  const apiKey = process.env.BINANCE_API_KEY;
  const secretKey = process.env.BINANCE_SECRET_KEY;
  // Timestamp in ms.
  // TODO: calculate trade history start date from option selected in ui.
  const ninetyDaysAgo = Date.now() - 90 * 24 * 60 * 60 * 1000;

  const startTime = await fetch(`${BINANCE_BASE_URL}/api/v3/time`)
    .then((res) => res.json())
    .then((data) => data.serverTime);

  const query = `symbol=ETHUSDT&startTime=${ninetyDaysAgo}&endTime=${startTime}`;

  const signature = jwt.sign(query, secretKey);

  async function getTrades() {
    return [];
  }
}
