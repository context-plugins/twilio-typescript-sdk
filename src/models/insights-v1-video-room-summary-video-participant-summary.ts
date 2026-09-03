import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  videoParticipantSummaryEnumCodecSchema,
  type VideoParticipantSummaryEnumCodec,
} from "./video-participant-summary-enum-codec.js";
import {
  videoParticipantSummaryEnumEdgeLocationSchema,
  type VideoParticipantSummaryEnumEdgeLocation,
} from "./video-participant-summary-enum-edge-location.js";
import {
  videoParticipantSummaryEnumRoomStatusSchema,
  type VideoParticipantSummaryEnumRoomStatus,
} from "./video-participant-summary-enum-room-status.js";
import {
  videoParticipantSummaryEnumTwilioRealmSchema,
  type VideoParticipantSummaryEnumTwilioRealm,
} from "./video-participant-summary-enum-twilio-realm.js";

export type InsightsV1VideoRoomSummaryVideoParticipantSummary = {
  participantSid?: string | null;
  participantIdentity?: string | null;
  joinTime?: Date | null;
  leaveTime?: Date | null;
  durationSec?: number | null;
  accountSid?: string | null;
  roomSid?: string | null;
  status?: VideoParticipantSummaryEnumRoomStatus;
  codecs?: VideoParticipantSummaryEnumCodec[] | null;
  endReason?: string | null;
  errorCode?: number | null;
  errorCodeUrl?: string | null;
  mediaRegion?: VideoParticipantSummaryEnumTwilioRealm;
  properties?: Record<string, unknown> | null;
  edgeLocation?: VideoParticipantSummaryEnumEdgeLocation;
  publisherInfo?: Record<string, unknown> | null;
  url?: string | null;
};

export const insightsV1VideoRoomSummaryVideoParticipantSummarySchema: Schema<InsightsV1VideoRoomSummaryVideoParticipantSummary> =
  s.object<InsightsV1VideoRoomSummaryVideoParticipantSummary>({
    participantSid: s.optionalNullable(s.string()),
    participantIdentity: s.optionalNullable(s.string()),
    joinTime: s.optionalNullable(s.dateTime()),
    leaveTime: s.optionalNullable(s.dateTime()),
    durationSec: s.optionalNullable(s.number()),
    accountSid: s.optionalNullable(s.string()),
    roomSid: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => videoParticipantSummaryEnumRoomStatusSchema)),
    codecs: s.optionalNullable(s.array(s.lazy(() => videoParticipantSummaryEnumCodecSchema))),
    endReason: s.optionalNullable(s.string()),
    errorCode: s.optionalNullable(s.number()),
    errorCodeUrl: s.optionalNullable(s.string()),
    mediaRegion: s.optional(s.lazy(() => videoParticipantSummaryEnumTwilioRealmSchema)),
    properties: s.optionalNullable(s.record(s.string(), s.unknown())),
    edgeLocation: s.optional(s.lazy(() => videoParticipantSummaryEnumEdgeLocationSchema)),
    publisherInfo: s.optionalNullable(s.record(s.string(), s.unknown())),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      participantSid: "participant_sid",
      participantIdentity: "participant_identity",
      joinTime: "join_time",
      leaveTime: "leave_time",
      durationSec: "duration_sec",
      accountSid: "account_sid",
      roomSid: "room_sid",
      endReason: "end_reason",
      errorCode: "error_code",
      errorCodeUrl: "error_code_url",
      mediaRegion: "media_region",
      edgeLocation: "edge_location",
      publisherInfo: "publisher_info",
    },
  });
