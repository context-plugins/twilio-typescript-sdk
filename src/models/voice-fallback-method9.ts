import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The HTTP method that we should use to call `voice_fallback_url`. Can be: `GET` or `POST` and
 * defaults to `POST`.
 */
export const VoiceFallbackMethod9 = {
  Get: "GET",
  Post: "POST",
} as const;
export type VoiceFallbackMethod9 =
  | (typeof VoiceFallbackMethod9)[keyof typeof VoiceFallbackMethod9]
  | (string & {});

export const voiceFallbackMethod9Schema: EnumSchema<VoiceFallbackMethod9> =
  s.enumOf<VoiceFallbackMethod9>(VoiceFallbackMethod9);
