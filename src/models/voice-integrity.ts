import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  voiceIntegrityCallsPerBundleSchema,
  type VoiceIntegrityCallsPerBundle,
} from "./voice-integrity-calls-per-bundle.js";

/** Metrics related to Voice Integrity enabled calls for the report period. */
export type VoiceIntegrity = {
  /** Total number of calls with Voice Integrity enabled. */
  enabledCalls?: number;
  /** Percentage of calls with Voice Integrity enabled. */
  enabledPercentage?: number;
  /** Number of calls per Voice Integrity enabled Bundle Sid. */
  callsPerBundle?: VoiceIntegrityCallsPerBundle[];
};

export const voiceIntegritySchema: Schema<VoiceIntegrity> = s.object<VoiceIntegrity>({
  enabledCalls: s.optional(s.int()),
  enabledPercentage: s.optional(s.float64()),
  callsPerBundle: s.optional(s.array(s.lazy(() => voiceIntegrityCallsPerBundleSchema))),
  _keysMap: {
    enabledCalls: "enabled_calls",
    enabledPercentage: "enabled_percentage",
    callsPerBundle: "calls_per_bundle",
  },
});
