import { s, type EnumSchema } from "../core/index.js";

export const VoiceFallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type VoiceFallbackMethod =
  | (typeof VoiceFallbackMethod)[keyof typeof VoiceFallbackMethod]
  | (string & {});

export const voiceFallbackMethodSchema: EnumSchema<VoiceFallbackMethod> =
  s.enumOf<VoiceFallbackMethod>(VoiceFallbackMethod);
