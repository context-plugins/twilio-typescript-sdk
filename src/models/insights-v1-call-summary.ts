import { s, type Schema } from "../core/index.js";
import { summaryEnumAnsweredBySchema, type SummaryEnumAnsweredBy } from "./summary-enum-answered-by.js";
import { summaryEnumCallStateSchema, type SummaryEnumCallState } from "./summary-enum-call-state.js";
import { summaryEnumCallTypeSchema, type SummaryEnumCallType } from "./summary-enum-call-type.js";
import {
  summaryEnumProcessingStateSchema,
  type SummaryEnumProcessingState,
} from "./summary-enum-processing-state.js";

export type InsightsV1CallSummary = {
  accountSid?: string | null;
  callSid?: string | null;
  callType?: SummaryEnumCallType;
  callState?: SummaryEnumCallState;
  answeredBy?: SummaryEnumAnsweredBy;
  processingState?: SummaryEnumProcessingState;
  createdTime?: Date | null;
  startTime?: Date | null;
  endTime?: Date | null;
  duration?: number | null;
  connectDuration?: number | null;
  from?: Record<string, unknown> | null;
  to?: Record<string, unknown> | null;
  carrierEdge?: Record<string, unknown> | null;
  clientEdge?: Record<string, unknown> | null;
  sdkEdge?: Record<string, unknown> | null;
  sipEdge?: Record<string, unknown> | null;
  tags?: string[] | null;
  url?: string | null;
  attributes?: Record<string, unknown> | null;
  properties?: Record<string, unknown> | null;
  trust?: Record<string, unknown> | null;
  annotation?: Record<string, unknown> | null;
};

export const insightsV1CallSummarySchema: Schema<InsightsV1CallSummary> = s.object<InsightsV1CallSummary>({
  accountSid: s.optionalNullable(s.string()),
  callSid: s.optionalNullable(s.string()),
  callType: s.optional(s.lazy(() => summaryEnumCallTypeSchema)),
  callState: s.optional(s.lazy(() => summaryEnumCallStateSchema)),
  answeredBy: s.optional(s.lazy(() => summaryEnumAnsweredBySchema)),
  processingState: s.optional(s.lazy(() => summaryEnumProcessingStateSchema)),
  createdTime: s.optionalNullable(s.dateTime()),
  startTime: s.optionalNullable(s.dateTime()),
  endTime: s.optionalNullable(s.dateTime()),
  duration: s.optionalNullable(s.number()),
  connectDuration: s.optionalNullable(s.number()),
  from: s.optionalNullable(s.record(s.string(), s.unknown())),
  to: s.optionalNullable(s.record(s.string(), s.unknown())),
  carrierEdge: s.optionalNullable(s.record(s.string(), s.unknown())),
  clientEdge: s.optionalNullable(s.record(s.string(), s.unknown())),
  sdkEdge: s.optionalNullable(s.record(s.string(), s.unknown())),
  sipEdge: s.optionalNullable(s.record(s.string(), s.unknown())),
  tags: s.optionalNullable(s.array(s.string())),
  url: s.optionalNullable(s.string()),
  attributes: s.optionalNullable(s.record(s.string(), s.unknown())),
  properties: s.optionalNullable(s.record(s.string(), s.unknown())),
  trust: s.optionalNullable(s.record(s.string(), s.unknown())),
  annotation: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    accountSid: "account_sid",
    callSid: "call_sid",
    callType: "call_type",
    callState: "call_state",
    answeredBy: "answered_by",
    processingState: "processing_state",
    createdTime: "created_time",
    startTime: "start_time",
    endTime: "end_time",
    connectDuration: "connect_duration",
    carrierEdge: "carrier_edge",
    clientEdge: "client_edge",
    sdkEdge: "sdk_edge",
    sipEdge: "sip_edge",
  },
});
