import { s, type EnumSchema } from "../core/index.js";

export const VoiceMethod7 = {
  Get: "GET",
  Post: "POST",
} as const;
export type VoiceMethod7 = (typeof VoiceMethod7)[keyof typeof VoiceMethod7] | (string & {});

export const voiceMethod7Schema: EnumSchema<VoiceMethod7> = s.enumOf<VoiceMethod7>(VoiceMethod7);
