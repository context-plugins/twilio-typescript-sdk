import { s, type EnumSchema } from "../core/index.js";

export const VoiceMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type VoiceMethod = (typeof VoiceMethod)[keyof typeof VoiceMethod] | (string & {});

export const voiceMethodSchema: EnumSchema<VoiceMethod> = s.enumOf<VoiceMethod>(VoiceMethod);
