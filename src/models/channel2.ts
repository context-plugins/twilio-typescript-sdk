import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Channel2 = {
  Sms: "SMS",
  Rcs: "RCS",
  Whatsapp: "WHATSAPP",
  Chat: "CHAT",
} as const;
export type Channel2 = (typeof Channel2)[keyof typeof Channel2] | (string & {});

export const channel2Schema: EnumSchema<Channel2> = s.enumOf<Channel2>(Channel2);
