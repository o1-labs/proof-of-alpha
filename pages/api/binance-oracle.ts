import { IncomingMessage, ServerResponse } from 'http';
import { PrivateKey, Field, Signature } from 'snarkyjs';
import jwt from 'jsonwebtoken';

const BINANCE_BASE_URL = 'https://api.binance.com';

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  // Timestamp in ms.
  // TODO: calculate trade history start date from option selected in ui.
  const ninetyDaysAgo = Date.now() - 90 * 24 * 60 * 60 * 1000;

  const startTime = await fetch(`${BINANCE_BASE_URL}/api/v3/time`)
    .then((res) => res.json())
    .then((data) => data.serverTime);

  async function getTrades() {
    return [];
  }
}
