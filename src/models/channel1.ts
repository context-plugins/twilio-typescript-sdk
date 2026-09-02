import { s, type EnumSchema } from "../core/index.js";

export const Channel1 = {
  Voice: "VOICE",
  Sms: "SMS",
  Rcs: "RCS",
  Whatsapp: "WHATSAPP",
  Chat: "CHAT",
} as const;
export type Channel1 = (typeof Channel1)[keyof typeof Channel1] | (string & {});

export const channel1Schema: EnumSchema<Channel1> = s.enumOf<Channel1>(Channel1);
