import { IncomingMessage, ServerResponse } from 'http';

import { PrivateKey, Field, Signature } from 'snarkyjs';
import { calculateCumulativeProfitLoss } from '../../utils';
import { parseRequest } from './_lib_oracle/parser';
import { Trade } from '../../types';
import TradeStatement from '../../components/common/TradeStatement';
import { getTrades } from './_lib_oracle/getTrades';



export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {

  try {
    const parsedRequest = parseRequest(req);
    const trades = await getTrades(parsedRequest);
    console.log('trades in oracle', trades)
    return res.json(trades);


  } catch (e) {
    console.log('error', e)
  }
  
  function calculateAlpha(trades: Trade[]) {
    return calculateCumulativeProfitLoss(trades);
  }



}
