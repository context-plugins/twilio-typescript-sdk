import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  metricEnumStreamDirectionSchema,
  type MetricEnumStreamDirection,
} from "./metric-enum-stream-direction.js";
import { metricEnumTwilioEdgeSchema, type MetricEnumTwilioEdge } from "./metric-enum-twilio-edge.js";

export type InsightsV1CallMetric = {
  /**
   * Timestamp of metric sample. Samples are taken every 10 seconds and contain the metrics for the
   * previous 10 seconds.
   */
  timestamp?: string | null;
  /** The unique SID identifier of the Call. */
  callSid?: string | null;
  /** The unique SID identifier of the Account. */
  accountSid?: string | null;
  edge?: MetricEnumTwilioEdge;
  direction?: MetricEnumStreamDirection;
  /** Contains metrics and properties for the Twilio media gateway of a PSTN call. */
  carrierEdge?: Record<string, unknown> | null;
  /**
   * Contains metrics and properties for the Twilio media gateway of a SIP Interface or Trunking
   * call.
   */
  sipEdge?: Record<string, unknown> | null;
  /** Contains metrics and properties for the SDK sensor library for Client calls. */
  sdkEdge?: Record<string, unknown> | null;
  /** Contains metrics and properties for the Twilio media gateway of a Client call. */
  clientEdge?: Record<string, unknown> | null;
};

export const insightsV1CallMetricSchema: Schema<InsightsV1CallMetric> = s.object<InsightsV1CallMetric>({
  timestamp: s.optionalNullable(s.string()),
  callSid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  edge: s.optional(s.lazy(() => metricEnumTwilioEdgeSchema)),
  direction: s.optional(s.lazy(() => metricEnumStreamDirectionSchema)),
  carrierEdge: s.optionalNullable(s.record(s.string(), s.unknown())),
  sipEdge: s.optionalNullable(s.record(s.string(), s.unknown())),
  sdkEdge: s.optionalNullable(s.record(s.string(), s.unknown())),
  clientEdge: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    callSid: "call_sid",
    accountSid: "account_sid",
    carrierEdge: "carrier_edge",
    sipEdge: "sip_edge",
    sdkEdge: "sdk_edge",
    clientEdge: "client_edge",
  },
});
