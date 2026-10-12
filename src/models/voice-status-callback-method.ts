import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The HTTP method we use to call `voice_status_callback_url`. Either `GET` or `POST`. */
export const VoiceStatusCallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type VoiceStatusCallbackMethod =
  | (typeof VoiceStatusCallbackMethod)[keyof typeof VoiceStatusCallbackMethod]
  | (string & {});

export const voiceStatusCallbackMethodSchema: EnumSchema<VoiceStatusCallbackMethod> =
  s.enumOf<VoiceStatusCallbackMethod>(VoiceStatusCallbackMethod);
