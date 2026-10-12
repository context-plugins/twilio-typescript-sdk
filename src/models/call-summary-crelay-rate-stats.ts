import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CallSummaryCrelayRateStats = {
  /** @default 0 */
  min?: number;
  /** @default 0 */
  max?: number;
  /** @default 0 */
  avg?: number;
};

export const callSummaryCrelayRateStatsSchema: Schema<CallSummaryCrelayRateStats> =
  s.object<CallSummaryCrelayRateStats>({
    min: s.defaulted(s.float64(), 0),
    max: s.defaulted(s.float64(), 0),
    avg: s.defaulted(s.float64(), 0),
  });
