import { s, type Schema } from "../core/index.js";

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
