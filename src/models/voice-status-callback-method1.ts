import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The HTTP method we should use to call `voice_status_callback_url`. Can be: `GET` or `POST`. */
export const VoiceStatusCallbackMethod1 = {
  Get: "GET",
  Post: "POST",
} as const;
export type VoiceStatusCallbackMethod1 =
  | (typeof VoiceStatusCallbackMethod1)[keyof typeof VoiceStatusCallbackMethod1]
  | (string & {});

export const voiceStatusCallbackMethod1Schema: EnumSchema<VoiceStatusCallbackMethod1> =
  s.enumOf<VoiceStatusCallbackMethod1>(VoiceStatusCallbackMethod1);
