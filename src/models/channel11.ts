import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Channel type for the Participant address. */
export const Channel11 = {
  Voice: "VOICE",
  Sms: "SMS",
  Rcs: "RCS",
  Whatsapp: "WHATSAPP",
  Chat: "CHAT",
} as const;
export type Channel11 = (typeof Channel11)[keyof typeof Channel11] | (string & {});

export const channel11Schema: EnumSchema<Channel11> = s.enumOf<Channel11>(Channel11);
