import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`. */
export const VoiceFallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type VoiceFallbackMethod =
  | (typeof VoiceFallbackMethod)[keyof typeof VoiceFallbackMethod]
  | (string & {});

export const voiceFallbackMethodSchema: EnumSchema<VoiceFallbackMethod> =
  s.enumOf<VoiceFallbackMethod>(VoiceFallbackMethod);
