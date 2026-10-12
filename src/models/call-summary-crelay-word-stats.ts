import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  callSummaryCrelayRateStatsSchema,
  type CallSummaryCrelayRateStats,
} from "./call-summary-crelay-rate-stats.js";

export type CallSummaryCrelayWordStats = {
  total?: number;
  wordsPerMinute?: CallSummaryCrelayRateStats;
};

export const callSummaryCrelayWordStatsSchema: Schema<CallSummaryCrelayWordStats> =
  s.object<CallSummaryCrelayWordStats>({
    total: s.optional(s.int()),
    wordsPerMinute: s.optional(s.lazy(() => callSummaryCrelayRateStatsSchema)),
    _keysMap: {
      wordsPerMinute: "words_per_minute",
    },
  });
