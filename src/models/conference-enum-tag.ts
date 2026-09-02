import { s, type EnumSchema } from "../core/index.js";

export const ConferenceEnumTag = {
  InvalidRequestedRegion: "invalid_requested_region",
  DuplicateIdentity: "duplicate_identity",
  StartFailure: "start_failure",
  RegionConfigurationIssues: "region_configuration_issues",
  QualityWarnings: "quality_warnings",
  ParticipantBehaviorIssues: "participant_behavior_issues",
  HighPacketLoss: "high_packet_loss",
  HighJitter: "high_jitter",
  HighLatency: "high_latency",
  LowMos: "low_mos",
  DetectedSilence: "detected_silence",
  NoConcurrentParticipants: "no_concurrent_participants",
} as const;
export type ConferenceEnumTag = (typeof ConferenceEnumTag)[keyof typeof ConferenceEnumTag] | (string & {});

export const conferenceEnumTagSchema: EnumSchema<ConferenceEnumTag> =
  s.enumOf<ConferenceEnumTag>(ConferenceEnumTag);
