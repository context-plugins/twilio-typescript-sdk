import { s, type Schema } from "../core/index.js";
import {
  voiceIntegrityCallsPerBundleSchema,
  type VoiceIntegrityCallsPerBundle,
} from "./voice-integrity-calls-per-bundle.js";

export type VoiceIntegrity = {
  enabledCalls?: number;
  enabledPercentage?: number;
  callsPerBundle?: VoiceIntegrityCallsPerBundle[];
};

export const voiceIntegritySchema: Schema<VoiceIntegrity> = s.object<VoiceIntegrity>({
  enabledCalls: s.optional(s.number()),
  enabledPercentage: s.optional(s.number()),
  callsPerBundle: s.optional(s.array(s.lazy(() => voiceIntegrityCallsPerBundleSchema))),
  _keysMap: {
    enabledCalls: "enabled_calls",
    enabledPercentage: "enabled_percentage",
    callsPerBundle: "calls_per_bundle",
  },
});
