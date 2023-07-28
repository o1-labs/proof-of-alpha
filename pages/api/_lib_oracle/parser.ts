import { IncomingMessage } from 'http';

export function parseRequest(req: IncomingMessage) {
  const url = new URL(req.url || '/', `http://${req.headers.host}`);

  const tradingPair = url.searchParams.get('trading-pair');
  const timeFrame = url.searchParams.get('time-frame');
  const binanceKey = url.searchParams.get('binance-key');
  const binanceSecret = url.searchParams.get('binance-secret');

  const parsedRequest = {
    tradingPair,
    timeFrame,
    binanceKey,
    binanceSecret
  };
  return parsedRequest;
}
