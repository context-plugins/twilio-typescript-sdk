import { s, type Schema } from "../core/index.js";
import { callStatePercentageSchema, type CallStatePercentage } from "./call-state-percentage.js";

export type InsightsV2InboundPhoneNumberReport = {
  handle?: string;
  totalCalls?: number;
  callAnswerScore?: number;
  callStatePercentage?: CallStatePercentage;
  silentCallsPercentage?: number;
};

export const insightsV2InboundPhoneNumberReportSchema: Schema<InsightsV2InboundPhoneNumberReport> =
  s.object<InsightsV2InboundPhoneNumberReport>({
    handle: s.optional(s.string()),
    totalCalls: s.optional(s.number()),
    callAnswerScore: s.optional(s.number()),
    callStatePercentage: s.optional(s.lazy(() => callStatePercentageSchema)),
    silentCallsPercentage: s.optional(s.number()),
    _keysMap: {
      totalCalls: "total_calls",
      callAnswerScore: "call_answer_score",
      callStatePercentage: "call_state_percentage",
      silentCallsPercentage: "silent_calls_percentage",
    },
  });
