import { s, type EnumSchema } from "../core/index.js";

export const SmsMethod14 = {
  Get: "GET",
  Post: "POST",
} as const;
export type SmsMethod14 = (typeof SmsMethod14)[keyof typeof SmsMethod14] | (string & {});

export const smsMethod14Schema: EnumSchema<SmsMethod14> = s.enumOf<SmsMethod14>(SmsMethod14);
