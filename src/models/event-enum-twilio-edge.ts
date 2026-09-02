import { s, type EnumSchema } from "../core/index.js";

export const EventEnumTwilioEdge = {
  UnknownEdge: "unknown_edge",
  CarrierEdge: "carrier_edge",
  SipEdge: "sip_edge",
  SdkEdge: "sdk_edge",
  ClientEdge: "client_edge",
} as const;
export type EventEnumTwilioEdge =
  | (typeof EventEnumTwilioEdge)[keyof typeof EventEnumTwilioEdge]
  | (string & {});

export const eventEnumTwilioEdgeSchema: EnumSchema<EventEnumTwilioEdge> =
  s.enumOf<EventEnumTwilioEdge>(EventEnumTwilioEdge);
