import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VoiceIntegrityCallsPerBundle = {
  bundleSid?: string;
  enabledPhonenumbers?: number;
  totalCalls?: number;
  answerRate?: number;
  humanAnswerRate?: number;
};

export const voiceIntegrityCallsPerBundleSchema: Schema<VoiceIntegrityCallsPerBundle> =
  s.object<VoiceIntegrityCallsPerBundle>({
    bundleSid: s.optional(s.string()),
    enabledPhonenumbers: s.optional(s.number()),
    totalCalls: s.optional(s.number()),
    answerRate: s.optional(s.number()),
    humanAnswerRate: s.optional(s.number()),
    _keysMap: {
      bundleSid: "bundle_sid",
      enabledPhonenumbers: "enabled_phonenumbers",
      totalCalls: "total_calls",
      answerRate: "answer_rate",
      humanAnswerRate: "human_answer_rate",
    },
  });
