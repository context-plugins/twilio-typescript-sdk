import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { callStatePercentageSchema, type CallStatePercentage } from "./call-state-percentage.js";

export type InsightsV2InboundPhoneNumberReport = {
  /** Inbound phone number handle represented in the report. */
  handle?: string;
  /** Total number of calls made with the given handle during the report period. */
  totalCalls?: number;
  /**
   * The call answer score measures customers behavior to the delivered calls. The score is a value
   * between 0 and 100, where 100 indicates that all calls were successfully answered.
   */
  callAnswerScore?: number;
  /** Percentage of calls made in each state. */
  callStatePercentage?: CallStatePercentage;
  /**
   * Percentage of inbound calls with silence tags over total outbound calls. A silent tag is
   * indicative of a connectivity issue or muted audio.
   */
  silentCallsPercentage?: number;
};

export const insightsV2InboundPhoneNumberReportSchema: Schema<InsightsV2InboundPhoneNumberReport> =
  s.object<InsightsV2InboundPhoneNumberReport>({
    handle: s.optional(s.string()),
    totalCalls: s.optional(s.int()),
    callAnswerScore: s.optional(s.float64()),
    callStatePercentage: s.optional(s.lazy(() => callStatePercentageSchema)),
    silentCallsPercentage: s.optional(s.float64()),
    _keysMap: {
      totalCalls: "total_calls",
      callAnswerScore: "call_answer_score",
      callStatePercentage: "call_state_percentage",
      silentCallsPercentage: "silent_calls_percentage",
    },
  });
