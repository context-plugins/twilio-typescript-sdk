import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VoiceMethod9 = {
  Get: "GET",
  Post: "POST",
} as const;
export type VoiceMethod9 = (typeof VoiceMethod9)[keyof typeof VoiceMethod9] | (string & {});

export const voiceMethod9Schema: EnumSchema<VoiceMethod9> = s.enumOf<VoiceMethod9>(VoiceMethod9);
