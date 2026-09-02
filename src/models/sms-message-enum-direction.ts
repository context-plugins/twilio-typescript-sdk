import { s, type EnumSchema } from "../core/index.js";

export const SmsMessageEnumDirection = {
  Inbound: "inbound",
  OutboundApi: "outbound-api",
  OutboundCall: "outbound-call",
  OutboundReply: "outbound-reply",
} as const;
export type SmsMessageEnumDirection =
  | (typeof SmsMessageEnumDirection)[keyof typeof SmsMessageEnumDirection]
  | (string & {});

export const smsMessageEnumDirectionSchema: EnumSchema<SmsMessageEnumDirection> =
  s.enumOf<SmsMessageEnumDirection>(SmsMessageEnumDirection);
