import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
