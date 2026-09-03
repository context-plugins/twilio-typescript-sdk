import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VoiceStatusCallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type VoiceStatusCallbackMethod =
  | (typeof VoiceStatusCallbackMethod)[keyof typeof VoiceStatusCallbackMethod]
  | (string & {});

export const voiceStatusCallbackMethodSchema: EnumSchema<VoiceStatusCallbackMethod> =
  s.enumOf<VoiceStatusCallbackMethod>(VoiceStatusCallbackMethod);
