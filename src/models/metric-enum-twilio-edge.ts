import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MetricEnumTwilioEdge = {
  UnknownEdge: "unknown_edge",
  CarrierEdge: "carrier_edge",
  SipEdge: "sip_edge",
  SdkEdge: "sdk_edge",
  ClientEdge: "client_edge",
} as const;
export type MetricEnumTwilioEdge =
  | (typeof MetricEnumTwilioEdge)[keyof typeof MetricEnumTwilioEdge]
  | (string & {});

export const metricEnumTwilioEdgeSchema: EnumSchema<MetricEnumTwilioEdge> =
  s.enumOf<MetricEnumTwilioEdge>(MetricEnumTwilioEdge);
