import { s, type EnumSchema } from "../core/index.js";

export const VoiceFallbackMethod7 = {
  Get: "GET",
  Post: "POST",
} as const;
export type VoiceFallbackMethod7 =
  | (typeof VoiceFallbackMethod7)[keyof typeof VoiceFallbackMethod7]
  | (string & {});

export const voiceFallbackMethod7Schema: EnumSchema<VoiceFallbackMethod7> =
  s.enumOf<VoiceFallbackMethod7>(VoiceFallbackMethod7);
