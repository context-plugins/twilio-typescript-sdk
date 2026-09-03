import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Channel3 = {
  Voice: "VOICE",
  Sms: "SMS",
  Rcs: "RCS",
  Whatsapp: "WHATSAPP",
  Chat: "CHAT",
} as const;
export type Channel3 = (typeof Channel3)[keyof typeof Channel3] | (string & {});

export const channel3Schema: EnumSchema<Channel3> = s.enumOf<Channel3>(Channel3);
