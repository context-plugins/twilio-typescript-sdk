import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`. */
export const VoiceFallbackMethod7 = {
  Get: "GET",
  Post: "POST",
} as const;
export type VoiceFallbackMethod7 =
  | (typeof VoiceFallbackMethod7)[keyof typeof VoiceFallbackMethod7]
  | (string & {});

export const voiceFallbackMethod7Schema: EnumSchema<VoiceFallbackMethod7> =
  s.enumOf<VoiceFallbackMethod7>(VoiceFallbackMethod7);
