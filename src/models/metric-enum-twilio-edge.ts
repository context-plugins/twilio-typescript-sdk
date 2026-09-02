import { s, type EnumSchema } from "../core/index.js";

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
