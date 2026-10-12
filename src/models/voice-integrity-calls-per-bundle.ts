import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VoiceIntegrityCallsPerBundle = {
  /** Voice Integrity Approved Profile Sid. */
  bundleSid?: string;
  /** The number of Voice Integrity enabled and registered phone numbers per Bundle Sid. */
  enabledPhonenumbers?: number;
  /**
   * The number of outbound calls on Voice Integrity enabled and registered number per Bundle Sid.
   */
  totalCalls?: number;
  /** Answer rate for calls on Voice Integrity enabled and registered number per Bundle Sid. */
  answerRate?: number;
  /**
   * Rate for calls on Voice Integrity enabled and registered number per Bundle Sid that were
   * answered by Human per each use case for Branded bundled calls.
   */
  humanAnswerRate?: number;
};

export const voiceIntegrityCallsPerBundleSchema: Schema<VoiceIntegrityCallsPerBundle> =
  s.object<VoiceIntegrityCallsPerBundle>({
    bundleSid: s.optional(s.string()),
    enabledPhonenumbers: s.optional(s.int()),
    totalCalls: s.optional(s.int()),
    answerRate: s.optional(s.float64()),
    humanAnswerRate: s.optional(s.float64()),
    _keysMap: {
      bundleSid: "bundle_sid",
      enabledPhonenumbers: "enabled_phonenumbers",
      totalCalls: "total_calls",
      answerRate: "answer_rate",
      humanAnswerRate: "human_answer_rate",
    },
  });
