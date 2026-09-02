import { s, type EnumSchema } from "../core/index.js";

export const Channel4 = {
  Sms: "SMS",
  Rcs: "RCS",
  Whatsapp: "WHATSAPP",
  Chat: "CHAT",
} as const;
export type Channel4 = (typeof Channel4)[keyof typeof Channel4] | (string & {});

export const channel4Schema: EnumSchema<Channel4> = s.enumOf<Channel4>(Channel4);
