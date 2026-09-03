import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VoiceMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type VoiceMethod = (typeof VoiceMethod)[keyof typeof VoiceMethod] | (string & {});

export const voiceMethodSchema: EnumSchema<VoiceMethod> = s.enumOf<VoiceMethod>(VoiceMethod);
