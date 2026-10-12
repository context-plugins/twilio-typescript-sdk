import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The HTTP method that we should use to call `sms_url`. Can be: `GET` or `POST` and defaults to
 * `POST`.
 */
export const SmsMethod9 = {
  Get: "GET",
  Post: "POST",
} as const;
export type SmsMethod9 = (typeof SmsMethod9)[keyof typeof SmsMethod9] | (string & {});

export const smsMethod9Schema: EnumSchema<SmsMethod9> = s.enumOf<SmsMethod9>(SmsMethod9);
