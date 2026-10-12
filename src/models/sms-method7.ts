import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The HTTP method we should use to call `sms_url`. Can be: `GET` or `POST`. */
export const SmsMethod7 = {
  Get: "GET",
  Post: "POST",
} as const;
export type SmsMethod7 = (typeof SmsMethod7)[keyof typeof SmsMethod7] | (string & {});

export const smsMethod7Schema: EnumSchema<SmsMethod7> = s.enumOf<SmsMethod7>(SmsMethod7);
