import { IncomingMessage, ServerResponse } from 'http';

import { PrivateKey, Field, Signature } from 'snarkyjs';
import { calculateCumulativeProfitLoss } from '../../utils';
import { parseRequest } from './_lib/parser';
import { Trade } from '../../types';
import TradeStatement from '../../components/common/TradeStatement';
import { getTrades } from './_lib_oracle/getTrades';



export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {

  const parsedRequest = parseRequest(req);

  const trades = await getTrades(parseRequest);
 
  
  function calculateAlpha(trades: Trade[]) {
    return calculateCumulativeProfitLoss(trades);
  }



  return res.json(trades);
}
