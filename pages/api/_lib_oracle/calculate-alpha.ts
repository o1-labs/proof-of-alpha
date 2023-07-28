import { calculateCumulativeProfitLoss } from '../../../utils';
import { Trade } from '../../../types';

export function calculateAlpha(trades: Trade[]) {
  return calculateCumulativeProfitLoss(trades);
}
