import { s, type EnumSchema } from "../core/index.js";

export const Channel11 = {
  Voice: "VOICE",
  Sms: "SMS",
  Rcs: "RCS",
  Whatsapp: "WHATSAPP",
  Chat: "CHAT",
} as const;
export type Channel11 = (typeof Channel11)[keyof typeof Channel11] | (string & {});

export const channel11Schema: EnumSchema<Channel11> = s.enumOf<Channel11>(Channel11);
