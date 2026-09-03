import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VoiceMethod15 = {
  Get: "GET",
  Post: "POST",
} as const;
export type VoiceMethod15 = (typeof VoiceMethod15)[keyof typeof VoiceMethod15] | (string & {});

export const voiceMethod15Schema: EnumSchema<VoiceMethod15> = s.enumOf<VoiceMethod15>(VoiceMethod15);
