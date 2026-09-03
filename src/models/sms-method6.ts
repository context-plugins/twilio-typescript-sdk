import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SmsMethod6 = {
  Get: "GET",
  Post: "POST",
} as const;
export type SmsMethod6 = (typeof SmsMethod6)[keyof typeof SmsMethod6] | (string & {});

export const smsMethod6Schema: EnumSchema<SmsMethod6> = s.enumOf<SmsMethod6>(SmsMethod6);
