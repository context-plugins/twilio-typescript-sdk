import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Channel5 = {
  Voice: "VOICE",
  Sms: "SMS",
  Rcs: "RCS",
  Email: "EMAIL",
  Whatsapp: "WHATSAPP",
  Chat: "CHAT",
  Api: "API",
  System: "SYSTEM",
} as const;
export type Channel5 = (typeof Channel5)[keyof typeof Channel5] | (string & {});

export const channel5Schema: EnumSchema<Channel5> = s.enumOf<Channel5>(Channel5);
