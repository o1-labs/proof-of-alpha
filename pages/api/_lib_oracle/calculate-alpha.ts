import { calculateCumulativeProfitLoss } from '../../../utils';

export function calculateAlpha(trades: Trade[]) {
  return calculateCumulativeProfitLoss(trades);
}
