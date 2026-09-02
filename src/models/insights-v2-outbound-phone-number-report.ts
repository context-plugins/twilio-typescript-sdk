import { s, type Schema } from "../core/index.js";
import {
  answeringMachineDetection1Schema,
  type AnsweringMachineDetection1,
} from "./answering-machine-detection1.js";
import { callStatePercentage1Schema, type CallStatePercentage1 } from "./call-state-percentage1.js";
import { countyCarrierValueSchema, type CountyCarrierValue } from "./county-carrier-value.js";

export type InsightsV2OutboundPhoneNumberReport = {
  handle?: string;
  totalCalls?: number;
  callAnswerScore?: number;
  callsByDeviceType?: Record<string, number>;
  answerRateDeviceType?: Record<string, number>;
  callStatePercentage?: CallStatePercentage1;
  blockedCallsByCarrier?: CountyCarrierValue[];
  silentCallsPercentage?: number;
  shortDurationCallsPercentage?: number;
  longDurationCallsPercentage?: number;
  potentialRobocallsPercentage?: number;
  answeringMachineDetection?: AnsweringMachineDetection1;
};

export const insightsV2OutboundPhoneNumberReportSchema: Schema<InsightsV2OutboundPhoneNumberReport> =
  s.object<InsightsV2OutboundPhoneNumberReport>({
    handle: s.optional(s.string()),
    totalCalls: s.optional(s.number()),
    callAnswerScore: s.optional(s.number()),
    callsByDeviceType: s.optional(s.record(s.string(), s.number())),
    answerRateDeviceType: s.optional(s.record(s.string(), s.number())),
    callStatePercentage: s.optional(s.lazy(() => callStatePercentage1Schema)),
    blockedCallsByCarrier: s.optional(s.array(s.lazy(() => countyCarrierValueSchema))),
    silentCallsPercentage: s.optional(s.number()),
    shortDurationCallsPercentage: s.optional(s.number()),
    longDurationCallsPercentage: s.optional(s.number()),
    potentialRobocallsPercentage: s.optional(s.number()),
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
