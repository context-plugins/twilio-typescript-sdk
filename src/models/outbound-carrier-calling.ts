import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { brandedCallingSchema, type BrandedCalling } from "./branded-calling.js";
import { countyCarrierValueSchema, type CountyCarrierValue } from "./county-carrier-value.js";
import { stirShakenSchema, type StirShaken } from "./stir-shaken.js";
import { voiceIntegritySchema, type VoiceIntegrity } from "./voice-integrity.js";

/** KYT metrics for outbound carrier calling. */
export type OutboundCarrierCalling = {
  /** Number of unique PSTN calling numbers to non-Twilio numbers during the report period. */
  uniqueCallingNumbers?: number;
  /** Number of unique non-Twilio PSTN called numbers during the report period. */
  uniqueCalledNumbers?: number;
  /** Percentage of blocked calls by carrier per country. */
  blockedCallsByCarrier?: CountyCarrierValue[];
  /**
   * Percentage of completed outbound calls under 10 seconds (PSTN Short call tags); More than 15%
   * is typically low trust measured.
   */
  shortDurationCallsPercentage?: number;
  /** Percentage of long duration calls ( >= 60 seconds) */
  longDurationCallsPercentage?: number;
  /** Percentage of completed outbound calls to unassigned or unallocated phone numbers. */
  potentialRobocallsPercentage?: number;
  /** Metrics related to Branded Calling bundled calls including CTIA for the report period. */
  brandedCalling?: BrandedCalling;
  /** Metrics related to Voice Integrity enabled calls for the report period. */
  voiceIntegrity?: VoiceIntegrity;
  /** Metrics related to STIR/SHAKEN attestation A, B, and C for the report period. */
  stirShaken?: StirShaken;
};

export const outboundCarrierCallingSchema: Schema<OutboundCarrierCalling> = s.object<OutboundCarrierCalling>({
  uniqueCallingNumbers: s.optional(s.int()),
  uniqueCalledNumbers: s.optional(s.int()),
  blockedCallsByCarrier: s.optional(s.array(s.lazy(() => countyCarrierValueSchema))),
  shortDurationCallsPercentage: s.optional(s.float64()),
  longDurationCallsPercentage: s.optional(s.float64()),
  potentialRobocallsPercentage: s.optional(s.float64()),
  brandedCalling: s.optional(s.lazy(() => brandedCallingSchema)),
  voiceIntegrity: s.optional(s.lazy(() => voiceIntegritySchema)),
  stirShaken: s.optional(s.lazy(() => stirShakenSchema)),
  _keysMap: {
    uniqueCallingNumbers: "unique_calling_numbers",
    uniqueCalledNumbers: "unique_called_numbers",
    blockedCallsByCarrier: "blocked_calls_by_carrier",
    shortDurationCallsPercentage: "short_duration_calls_percentage",
    longDurationCallsPercentage: "long_duration_calls_percentage",
    potentialRobocallsPercentage: "potential_robocalls_percentage",
    brandedCalling: "branded_calling",
    voiceIntegrity: "voice_integrity",
    stirShaken: "stir_shaken",
  },
});
