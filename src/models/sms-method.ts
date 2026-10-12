import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The HTTP method we use to call `sms_url`. Can be: `GET` or `POST`. */
export const SmsMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type SmsMethod = (typeof SmsMethod)[keyof typeof SmsMethod] | (string & {});

export const smsMethodSchema: EnumSchema<SmsMethod> = s.enumOf<SmsMethod>(SmsMethod);
