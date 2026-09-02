import { s, type Schema } from "../core/index.js";
import {
  metricEnumStreamDirectionSchema,
  type MetricEnumStreamDirection,
} from "./metric-enum-stream-direction.js";
import { metricEnumTwilioEdgeSchema, type MetricEnumTwilioEdge } from "./metric-enum-twilio-edge.js";

export type InsightsV1CallMetric = {
  timestamp?: string | null;
  callSid?: string | null;
  accountSid?: string | null;
  edge?: MetricEnumTwilioEdge;
  direction?: MetricEnumStreamDirection;
  carrierEdge?: Record<string, unknown> | null;
  sipEdge?: Record<string, unknown> | null;
  sdkEdge?: Record<string, unknown> | null;
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
