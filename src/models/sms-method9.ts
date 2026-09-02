import { s, type EnumSchema } from "../core/index.js";

export const SmsMethod9 = {
  Get: "GET",
  Post: "POST",
} as const;
export type SmsMethod9 = (typeof SmsMethod9)[keyof typeof SmsMethod9] | (string & {});

export const smsMethod9Schema: EnumSchema<SmsMethod9> = s.enumOf<SmsMethod9>(SmsMethod9);
