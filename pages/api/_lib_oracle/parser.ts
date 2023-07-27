import { IncomingMessage } from 'http';

export function parseRequest(req: IncomingMessage) {
  const url = new URL(req.url || '/', `http://${req.headers.host}`);

  const timeFrame = url.searchParams.get('time-frame');
  const binanceKey = url.searchParams.get('binance-key');
  const binanceSecret = url.searchParams.get('binance-secret');

  const parsedRequest = {
    timeFrame,
    binanceKey,
    binanceSecret
  };
  return parsedRequest;
}
