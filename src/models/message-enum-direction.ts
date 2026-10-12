import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The direction of the message. Can be: `inbound` for incoming messages, `outbound-api` for
 * messages created by the REST API, `outbound-call` for messages created during a call, or
 * `outbound-reply` for messages created in response to an incoming message.
 */
export const MessageEnumDirection = {
  Inbound: "inbound",
  OutboundApi: "outbound-api",
  OutboundCall: "outbound-call",
  OutboundReply: "outbound-reply",
} as const;
export type MessageEnumDirection =
  | (typeof MessageEnumDirection)[keyof typeof MessageEnumDirection]
  | (string & {});

export const messageEnumDirectionSchema: EnumSchema<MessageEnumDirection> =
  s.enumOf<MessageEnumDirection>(MessageEnumDirection);
