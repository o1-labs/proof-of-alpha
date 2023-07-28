import { IncomingMessage, ServerResponse } from 'http';

import { PrivateKey, Field, Signature } from 'snarkyjs';
import { calculateCumulativeProfitLoss } from '../../utils';
import { parseRequest } from './_lib_oracle/parser';
import { Trade } from '../../types';
import TradeStatement from '../../components/common/TradeStatement';
import { getTrades } from './_lib_oracle/get-trades';
import { calculateAlpha } from './_lib_oracle/calculate-alpha';
import { constructPoa } from './_lib_oracle/construct-poa';



export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {

  try {
    const parsedRequest = parseRequest(req);

    const trades = await getTrades(parsedRequest);
    const alpha = calculateAlpha(trades); 
    const proofOfAlpha = await constructPoa(alpha, parsedRequest);



    console.log('trades in oracle', trades)
  res.status(200).json({
    payload: proofOfAlpha
  });

  } catch (e) {
    console.log('error', e)
  }
  




}
