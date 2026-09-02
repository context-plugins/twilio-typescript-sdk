import { s, type Schema } from "../core/index.js";
import { eventEnumLevelSchema, type EventEnumLevel } from "./event-enum-level.js";
import { eventEnumTwilioEdgeSchema, type EventEnumTwilioEdge } from "./event-enum-twilio-edge.js";

export type InsightsV1CallEvent = {
  timestamp?: string | null;
  callSid?: string | null;
  accountSid?: string | null;
  edge?: EventEnumTwilioEdge;
  group?: string | null;
  level?: EventEnumLevel;
  name?: string | null;
  carrierEdge?: Record<string, unknown> | null;
  sipEdge?: Record<string, unknown> | null;
  sdkEdge?: Record<string, unknown> | null;
  clientEdge?: Record<string, unknown> | null;
};

export const insightsV1CallEventSchema: Schema<InsightsV1CallEvent> = s.object<InsightsV1CallEvent>({
  timestamp: s.optionalNullable(s.string()),
  callSid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  edge: s.optional(s.lazy(() => eventEnumTwilioEdgeSchema)),
  group: s.optionalNullable(s.string()),
  level: s.optional(s.lazy(() => eventEnumLevelSchema)),
  name: s.optionalNullable(s.string()),
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
