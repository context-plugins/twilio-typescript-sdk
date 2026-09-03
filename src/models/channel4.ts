import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Channel4 = {
  Sms: "SMS",
  Rcs: "RCS",
  Whatsapp: "WHATSAPP",
  Chat: "CHAT",
} as const;
export type Channel4 = (typeof Channel4)[keyof typeof Channel4] | (string & {});

export const channel4Schema: EnumSchema<Channel4> = s.enumOf<Channel4>(Channel4);
