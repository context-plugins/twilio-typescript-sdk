import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The HTTP method we should use when calling the `sms_url`. Can be: `GET` or `POST`. */
export const SmsMethod14 = {
  Get: "GET",
  Post: "POST",
} as const;
export type SmsMethod14 = (typeof SmsMethod14)[keyof typeof SmsMethod14] | (string & {});

export const smsMethod14Schema: EnumSchema<SmsMethod14> = s.enumOf<SmsMethod14>(SmsMethod14);
