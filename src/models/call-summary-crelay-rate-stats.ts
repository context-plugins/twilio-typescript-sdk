import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CallSummaryCrelayRateStats = {
  min?: number;
  max?: number;
  avg?: number;
};

export const callSummaryCrelayRateStatsSchema: Schema<CallSummaryCrelayRateStats> =
  s.object<CallSummaryCrelayRateStats>({
    min: s.optional(s.number()),
    max: s.optional(s.number()),
    avg: s.optional(s.number()),
  });
