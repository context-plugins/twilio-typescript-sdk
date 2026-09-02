import { s, type EnumSchema } from "../core/index.js";

export const VoiceFallbackMethod9 = {
  Get: "GET",
  Post: "POST",
} as const;
export type VoiceFallbackMethod9 =
  | (typeof VoiceFallbackMethod9)[keyof typeof VoiceFallbackMethod9]
  | (string & {});

export const voiceFallbackMethod9Schema: EnumSchema<VoiceFallbackMethod9> =
  s.enumOf<VoiceFallbackMethod9>(VoiceFallbackMethod9);
