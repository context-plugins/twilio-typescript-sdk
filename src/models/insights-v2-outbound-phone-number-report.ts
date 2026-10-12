import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  answeringMachineDetection1Schema,
  type AnsweringMachineDetection1,
} from "./answering-machine-detection1.js";
import { callStatePercentage1Schema, type CallStatePercentage1 } from "./call-state-percentage1.js";
import { countyCarrierValueSchema, type CountyCarrierValue } from "./county-carrier-value.js";

export type InsightsV2OutboundPhoneNumberReport = {
  /** The outbound phone number handle. */
  handle?: string;
  /** Total number of outbound calls made with the given handle during the report period. */
  totalCalls?: number;
  /**
   * The call answer score measures customers behavior to the delivered calls. The score is a value
   * between 0 and 100, where 100 indicates that all calls were successfully answered.
   */
  callAnswerScore?: number;
  /** Number of calls made with each device type. `voip`, `mobile`, `landline`, `unknown` */
  callsByDeviceType?: Record<string, number>;
  /** Answer rate for each device type. `voip`, `mobile`, `landline`, `unknown` */
  answerRateDeviceType?: Record<string, number>;
  /** Percentage of calls made in each state. */
  callStatePercentage?: CallStatePercentage1;
  /** Percentage of blocked calls by carrier per country. */
  blockedCallsByCarrier?: CountyCarrierValue[];
  /**
   * Percentage of calls with silence tags over total calls. A silent tag is indicative of a
   * connectivity issue or muted audio.
   */
  silentCallsPercentage?: number;
  /**
   * Percentage of completed outbound calls under 10 seconds (PSTN Short call tags); More than 15%
   * is typically low trust measured.
   */
  shortDurationCallsPercentage?: number;
  /** Percentage of long duration calls ( >= 60 seconds) */
  longDurationCallsPercentage?: number;
  /** Percentage of completed outbound calls to unassigned or unallocated phone numbers. */
  potentialRobocallsPercentage?: number;
  /** Number of calls made in answering machine detection (AMD) enabled. */
  answeringMachineDetection?: AnsweringMachineDetection1;
};

export const insightsV2OutboundPhoneNumberReportSchema: Schema<InsightsV2OutboundPhoneNumberReport> =
  s.object<InsightsV2OutboundPhoneNumberReport>({
    handle: s.optional(s.string()),
    totalCalls: s.optional(s.int()),
    callAnswerScore: s.optional(s.float64()),
    callsByDeviceType: s.optional(s.record(s.string(), s.int())),
    answerRateDeviceType: s.optional(s.record(s.string(), s.float64())),
    callStatePercentage: s.optional(s.lazy(() => callStatePercentage1Schema)),
    blockedCallsByCarrier: s.optional(s.array(s.lazy(() => countyCarrierValueSchema))),
    silentCallsPercentage: s.optional(s.float64()),
    shortDurationCallsPercentage: s.optional(s.float64()),
    longDurationCallsPercentage: s.optional(s.float64()),
    potentialRobocallsPercentage: s.optional(s.float64()),
    answeringMachineDetection: s.optional(s.lazy(() => answeringMachineDetection1Schema)),
    _keysMap: {
      totalCalls: "total_calls",
      callAnswerScore: "call_answer_score",
      callsByDeviceType: "calls_by_device_type",
      answerRateDeviceType: "answer_rate_device_type",
      callStatePercentage: "call_state_percentage",
      blockedCallsByCarrier: "blocked_calls_by_carrier",
      silentCallsPercentage: "silent_calls_percentage",
      shortDurationCallsPercentage: "short_duration_calls_percentage",
      longDurationCallsPercentage: "long_duration_calls_percentage",
      potentialRobocallsPercentage: "potential_robocalls_percentage",
      answeringMachineDetection: "answering_machine_detection",
    },
  });
