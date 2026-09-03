import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SmsMessageEnumUpdateStatus = {
  Canceled: "canceled",
} as const;
export type SmsMessageEnumUpdateStatus =
  | (typeof SmsMessageEnumUpdateStatus)[keyof typeof SmsMessageEnumUpdateStatus]
  | (string & {});

export const smsMessageEnumUpdateStatusSchema: EnumSchema<SmsMessageEnumUpdateStatus> =
  s.enumOf<SmsMessageEnumUpdateStatus>(SmsMessageEnumUpdateStatus);
