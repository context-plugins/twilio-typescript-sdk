import { s, type Schema } from "../core/index.js";
import { brandedCallingSchema, type BrandedCalling } from "./branded-calling.js";
import { countyCarrierValueSchema, type CountyCarrierValue } from "./county-carrier-value.js";
import { stirShakenSchema, type StirShaken } from "./stir-shaken.js";
import { voiceIntegritySchema, type VoiceIntegrity } from "./voice-integrity.js";

export type OutboundCarrierCalling = {
  uniqueCallingNumbers?: number;
  uniqueCalledNumbers?: number;
  blockedCallsByCarrier?: CountyCarrierValue[];
  shortDurationCallsPercentage?: number;
  longDurationCallsPercentage?: number;
  potentialRobocallsPercentage?: number;
  brandedCalling?: BrandedCalling;
  voiceIntegrity?: VoiceIntegrity;
  stirShaken?: StirShaken;
};

export const outboundCarrierCallingSchema: Schema<OutboundCarrierCalling> = s.object<OutboundCarrierCalling>({
  uniqueCallingNumbers: s.optional(s.number()),
  uniqueCalledNumbers: s.optional(s.number()),
  blockedCallsByCarrier: s.optional(s.array(s.lazy(() => countyCarrierValueSchema))),
  shortDurationCallsPercentage: s.optional(s.number()),
  longDurationCallsPercentage: s.optional(s.number()),
  potentialRobocallsPercentage: s.optional(s.number()),
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
