import { s, type Schema } from "../core/index.js";
import {
  callSummaryCrelayRateStatsSchema,
  type CallSummaryCrelayRateStats,
} from "./call-summary-crelay-rate-stats.js";

export type CallSummaryCrelayTokenStats = {
  total?: number;
  tokensPerSecond?: CallSummaryCrelayRateStats;
};

export const callSummaryCrelayTokenStatsSchema: Schema<CallSummaryCrelayTokenStats> =
  s.object<CallSummaryCrelayTokenStats>({
    total: s.optional(s.number()),
    tokensPerSecond: s.optional(s.lazy(() => callSummaryCrelayRateStatsSchema)),
    _keysMap: {
      tokensPerSecond: "tokens_per_second",
    },
  });
