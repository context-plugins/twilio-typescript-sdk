import { s, type Schema } from "../core/index.js";
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
  callDeliverabilityScore?: number;
  callAnswerScore?: number;
  totalCalls?: number;
  callDirection?: CallDirection;
  callState?: CallState;
  callType?: CallType;
  aloc?: number;
  twilioEdgeLocation?: Record<string, number>;
  callerCountryCode?: Record<string, number>;
  calleeCountryCode?: Record<string, number>;
  averageQueueTimeMs?: number;
  silentCallsPercentage?: number;
  networkIssues?: NetworkIssues;
  kyt?: Kyt;
  answeringMachineDetection?: AnsweringMachineDetection;
};

export const accountReportSchema: Schema<AccountReport> = s.object<AccountReport>({
  callDeliverabilityScore: s.optional(s.number()),
  callAnswerScore: s.optional(s.number()),
  totalCalls: s.optional(s.number()),
  callDirection: s.optional(s.lazy(() => callDirectionSchema)),
  callState: s.optional(s.lazy(() => callStateSchema)),
  callType: s.optional(s.lazy(() => callTypeSchema)),
  aloc: s.optional(s.number()),
  twilioEdgeLocation: s.optional(s.record(s.string(), s.number())),
  callerCountryCode: s.optional(s.record(s.string(), s.number())),
  calleeCountryCode: s.optional(s.record(s.string(), s.number())),
  averageQueueTimeMs: s.optional(s.number()),
  silentCallsPercentage: s.optional(s.number()),
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
