import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { summaryEnumAnsweredBySchema, type SummaryEnumAnsweredBy } from "./summary-enum-answered-by.js";
import { summaryEnumCallStateSchema, type SummaryEnumCallState } from "./summary-enum-call-state.js";
import { summaryEnumCallTypeSchema, type SummaryEnumCallType } from "./summary-enum-call-type.js";
import {
  summaryEnumProcessingStateSchema,
  type SummaryEnumProcessingState,
} from "./summary-enum-processing-state.js";

export type InsightsV1CallSummary = {
  /** The unique SID identifier of the Account. */
  accountSid?: string | null;
  /** The unique SID identifier of the Call. */
  callSid?: string | null;
  callType?: SummaryEnumCallType;
  callState?: SummaryEnumCallState;
  answeredBy?: SummaryEnumAnsweredBy;
  processingState?: SummaryEnumProcessingState;
  /**
   * The time at which the Call was created, given in ISO 8601 format. Can be different from
   * `start_time` in the event of queueing due to CPS
   */
  createdTime?: Date | null;
  /** The time at which the Call was started, given in ISO 8601 format. */
  startTime?: Date | null;
  /** The time at which the Call was ended, given in ISO 8601 format. */
  endTime?: Date | null;
  /** Duration between when the call was initiated and the call was ended */
  duration?: number | null;
  /** Duration between when the call was answered and when it ended */
  connectDuration?: number | null;
  /**
   * `object` The calling party. See [Details: Call
   * Summary](https://www.twilio.com/docs/voice/voice-insights/api/call/details-call-summary#tofrom-object)
   * for the object properties.
   */
  from?: Record<string, unknown> | null;
  /**
   * `object` The called party. See [Details: Call
   * Summary](https://www.twilio.com/docs/voice/voice-insights/api/call/details-call-summary#tofrom-object)
   * for the object properties.
   */
  to?: Record<string, unknown> | null;
  /**
   * `object` Contains metrics and properties for the Twilio media gateway of a PSTN call. See
   * [Details: Call
   * Summary](https://www.twilio.com/docs/voice/voice-insights/api/call/details-call-summary#edges-and-their-properties)
   * for the object properties.
   */
  carrierEdge?: Record<string, unknown> | null;
  /**
   * `object` Contains metrics and properties for the Twilio media gateway of a Client call. See
   * [Details: Call
   * Summary](https://www.twilio.com/docs/voice/voice-insights/api/call/details-call-summary#edges-and-their-properties)
   * for the object properties.
   */
  clientEdge?: Record<string, unknown> | null;
  /**
   * `object` Contains metrics and properties for the SDK sensor library for Client calls. See
   * [Details: Call
   * Summary](https://www.twilio.com/docs/voice/voice-insights/api/call/details-call-summary#edges-and-their-properties)
   * for the object properties.
   */
  sdkEdge?: Record<string, unknown> | null;
  /**
   * `object` Contains metrics and properties for the Twilio media gateway of a SIP Interface or
   * Trunking call. See [Details: Call
   * Summary](https://www.twilio.com/docs/voice/voice-insights/api/call/details-call-summary#edges-and-their-properties)
   * for the object properties.
   */
  sipEdge?: Record<string, unknown> | null;
  /**
   * Tags applied to calls by Voice Insights analysis indicating a condition that could result in
   * subjective degradation of the call quality.
   */
  tags?: string[] | null;
  /** The URL of this resource. */
  url?: string | null;
  /**
   * `object` Attributes capturing call-flow-specific details. See [Details: Call
   * Summary](https://www.twilio.com/docs/voice/voice-insights/api/call/details-call-summary#attributes-object)
   * for the object properties.
   */
  attributes?: Record<string, unknown> | null;
  /**
   * `object` Contains edge-agnostic call-level details. See [Details: Call
   * Summary](https://www.twilio.com/docs/voice/voice-insights/api/call/details-call-summary#properties-object)
   * for the object properties.
   */
  properties?: Record<string, unknown> | null;
  /**
   * `object` Contains trusted communications details including Branded Call and verified caller ID.
   * See [Details: Call
   * Summary](https://www.twilio.com/docs/voice/voice-insights/api/call/details-call-summary#trust-object)
   * for the object properties.
   */
  trust?: Record<string, unknown> | null;
  /**
   * `object` Programmatically labeled annotations for the Call. Developers can update the Call
   * Summary records with Annotation during or after a Call. Annotations can be updated as long as
   * the Call Summary record is addressable via the API. See [Details: Call
   * Summary](https://www.twilio.com/docs/voice/voice-insights/api/call/details-call-summary#annotation-object)
   * for the object properties.
   */
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
  duration: s.optionalNullable(s.int()),
  connectDuration: s.optionalNullable(s.int()),
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
