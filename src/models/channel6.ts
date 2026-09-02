import { s, type EnumSchema } from "../core/index.js";

export const Channel6 = {
  Voice: "VOICE",
  Sms: "SMS",
  Rcs: "RCS",
  Whatsapp: "WHATSAPP",
  Chat: "CHAT",
} as const;
export type Channel6 = (typeof Channel6)[keyof typeof Channel6] | (string & {});

export const channel6Schema: EnumSchema<Channel6> = s.enumOf<Channel6>(Channel6);
