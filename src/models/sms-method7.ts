import { s, type EnumSchema } from "../core/index.js";

export const SmsMethod7 = {
  Get: "GET",
  Post: "POST",
} as const;
export type SmsMethod7 = (typeof SmsMethod7)[keyof typeof SmsMethod7] | (string & {});

export const smsMethod7Schema: EnumSchema<SmsMethod7> = s.enumOf<SmsMethod7>(SmsMethod7);
