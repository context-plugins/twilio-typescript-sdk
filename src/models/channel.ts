import { s, type EnumSchema } from "../core/index.js";

export const Channel = {
  Whatsapp: "whatsapp",
} as const;
export type Channel = (typeof Channel)[keyof typeof Channel] | (string & {});

export const channelSchema: EnumSchema<Channel> = s.enumOf<Channel>(Channel);
