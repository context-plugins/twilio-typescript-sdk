import { s, type EnumSchema } from "../core/index.js";

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
