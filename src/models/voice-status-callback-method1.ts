import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VoiceStatusCallbackMethod1 = {
  Get: "GET",
  Post: "POST",
} as const;
export type VoiceStatusCallbackMethod1 =
  | (typeof VoiceStatusCallbackMethod1)[keyof typeof VoiceStatusCallbackMethod1]
  | (string & {});

export const voiceStatusCallbackMethod1Schema: EnumSchema<VoiceStatusCallbackMethod1> =
  s.enumOf<VoiceStatusCallbackMethod1>(VoiceStatusCallbackMethod1);
