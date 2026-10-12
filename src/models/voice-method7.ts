import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`. */
export const VoiceMethod7 = {
  Get: "GET",
  Post: "POST",
} as const;
export type VoiceMethod7 = (typeof VoiceMethod7)[keyof typeof VoiceMethod7] | (string & {});

export const voiceMethod7Schema: EnumSchema<VoiceMethod7> = s.enumOf<VoiceMethod7>(VoiceMethod7);
