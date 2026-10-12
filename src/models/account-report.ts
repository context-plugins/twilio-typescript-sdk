import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  answeringMachineDetectionSchema,
  type AnsweringMachineDetection,
} from "./answering-machine-detection.js";
import { callDirectionSchema, type CallDirection } from "./call-direction.js";
import { callStateSchema, type CallState } from "./call-state.js";
import { callTypeSchema, type CallType } from "./call-type.js";
import { kytSchema, type Kyt } from "./kyt.js";
import { networkIssuesSchema, type NetworkIssues } from "./network-issues.js";

export type AccountReport = {
  /**
   * The call deliverability score measures the network effectiveness in delivering calls by scoring
   * calls reach the intended recipient. The score is a value between 0 and 100, where 100 indicates
   * that all calls were successfully delivered.
   */
  callDeliverabilityScore?: number;
  /**
   * The call answer score measures customers behavior to the delivered calls. The score is a value
   * between 0 and 100, where 100 indicates that all calls were successfully answered.
   */
  callAnswerScore?: number;
  /** Total number of calls made during the report period. */
  totalCalls?: number;
  /** Number of calls made in each direction. */
  callDirection?: CallDirection;
  /** Number of calls made in each state. */
  callState?: CallState;
  /** Number of calls made in each type. `carrier`, `sip`, `trunking`, `client`, `whatsapp` */
  callType?: CallType;
  /** Average length of call in seconds. */
  aloc?: number;
  /**
   * Number of calls made in each Twilio Edge location. Refer to [Public Edge
   * Locations](https://www.twilio.com/docs/global-infrastructure/edge-locations#public-edge-locations)
   * for more detail.
   */
  twilioEdgeLocation?: Record<string, number>;
  /** Number of calls originating from each country (ISO alpha-2). */
  callerCountryCode?: Record<string, number>;
  /** Number of calls terminating in each country (ISO alpha-2). */
  calleeCountryCode?: Record<string, number>;
  /** Average queue time in milliseconds. */
  averageQueueTimeMs?: number;
  /** Percentage of silent calls. */
  silentCallsPercentage?: number;
  /** Network-quality indicators for SDK and Twilio Gateway traffic during the report period. */
  networkIssues?: NetworkIssues;
  /**
   * Know Your Traffic (KYT) metrics focused on outbound carrier performance and trust signals for
   * the report period.
   */
  kyt?: Kyt;
  /** Number of calls made in each answering machine detection. */
  answeringMachineDetection?: AnsweringMachineDetection;
};

export const accountReportSchema: Schema<AccountReport> = s.object<AccountReport>({
  callDeliverabilityScore: s.optional(s.float64()),
  callAnswerScore: s.optional(s.float64()),
  totalCalls: s.optional(s.int()),
  callDirection: s.optional(s.lazy(() => callDirectionSchema)),
  callState: s.optional(s.lazy(() => callStateSchema)),
  callType: s.optional(s.lazy(() => callTypeSchema)),
  aloc: s.optional(s.float64()),
  twilioEdgeLocation: s.optional(s.record(s.string(), s.int())),
  callerCountryCode: s.optional(s.record(s.string(), s.int())),
  calleeCountryCode: s.optional(s.record(s.string(), s.int())),
  averageQueueTimeMs: s.optional(s.float64()),
  silentCallsPercentage: s.optional(s.float64()),
  networkIssues: s.optional(s.lazy(() => networkIssuesSchema)),
  kyt: s.optional(s.lazy(() => kytSchema)),
  answeringMachineDetection: s.optional(s.lazy(() => answeringMachineDetectionSchema)),
  _keysMap: {
    callDeliverabilityScore: "call_deliverability_score",
    callAnswerScore: "call_answer_score",
    totalCalls: "total_calls",
    callDirection: "call_direction",
    callState: "call_state",
    callType: "call_type",
    twilioEdgeLocation: "twilio_edge_location",
    callerCountryCode: "caller_country_code",
    calleeCountryCode: "callee_country_code",
    averageQueueTimeMs: "average_queue_time_ms",
    silentCallsPercentage: "silent_calls_percentage",
    networkIssues: "network_issues",
    kyt: "KYT",
    answeringMachineDetection: "answering_machine_detection",
  },
});
