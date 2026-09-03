import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SmsMethod9 = {
  Get: "GET",
  Post: "POST",
} as const;
export type SmsMethod9 = (typeof SmsMethod9)[keyof typeof SmsMethod9] | (string & {});

export const smsMethod9Schema: EnumSchema<SmsMethod9> = s.enumOf<SmsMethod9>(SmsMethod9);
