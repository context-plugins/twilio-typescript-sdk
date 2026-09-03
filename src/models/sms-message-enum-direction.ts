import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
