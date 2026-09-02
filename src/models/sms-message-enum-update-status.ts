import { s, type EnumSchema } from "../core/index.js";

export const SmsMessageEnumUpdateStatus = {
  Canceled: "canceled",
} as const;
export type SmsMessageEnumUpdateStatus =
  | (typeof SmsMessageEnumUpdateStatus)[keyof typeof SmsMessageEnumUpdateStatus]
  | (string & {});

export const smsMessageEnumUpdateStatusSchema: EnumSchema<SmsMessageEnumUpdateStatus> =
  s.enumOf<SmsMessageEnumUpdateStatus>(SmsMessageEnumUpdateStatus);
