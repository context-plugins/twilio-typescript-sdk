import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amdStatusCallbackMethodSchema, type AmdStatusCallbackMethod } from "./amd-status-callback-method.js";
import {
  videoRoomSummaryEnumCodecSchema,
  type VideoRoomSummaryEnumCodec,
} from "./video-room-summary-enum-codec.js";
import {
  videoRoomSummaryEnumCreatedMethodSchema,
  type VideoRoomSummaryEnumCreatedMethod,
} from "./video-room-summary-enum-created-method.js";
import {
  videoRoomSummaryEnumEdgeLocationSchema,
  type VideoRoomSummaryEnumEdgeLocation,
} from "./video-room-summary-enum-edge-location.js";
import {
  videoRoomSummaryEnumEndReasonSchema,
  type VideoRoomSummaryEnumEndReason,
} from "./video-room-summary-enum-end-reason.js";
import {
  videoRoomSummaryEnumProcessingStateSchema,
  type VideoRoomSummaryEnumProcessingState,
} from "./video-room-summary-enum-processing-state.js";
import {
  videoRoomSummaryEnumRoomStatusSchema,
  type VideoRoomSummaryEnumRoomStatus,
} from "./video-room-summary-enum-room-status.js";
import {
  videoRoomSummaryEnumRoomTypeSchema,
  type VideoRoomSummaryEnumRoomType,
} from "./video-room-summary-enum-room-type.js";
import {
  videoRoomSummaryEnumTwilioRealmSchema,
  type VideoRoomSummaryEnumTwilioRealm,
} from "./video-room-summary-enum-twilio-realm.js";

export type InsightsV1VideoRoomSummary = {
  accountSid?: string | null;
  roomSid?: string | null;
  roomName?: string | null;
  createTime?: Date | null;
  endTime?: Date | null;
  roomType?: VideoRoomSummaryEnumRoomType;
  roomStatus?: VideoRoomSummaryEnumRoomStatus;
  statusCallback?: string | null;
  statusCallbackMethod?: AmdStatusCallbackMethod | null;
  createdMethod?: VideoRoomSummaryEnumCreatedMethod;
  endReason?: VideoRoomSummaryEnumEndReason;
  maxParticipants?: number | null;
  uniqueParticipants?: number | null;
  uniqueParticipantIdentities?: number | null;
  concurrentParticipants?: number | null;
  maxConcurrentParticipants?: number | null;
  codecs?: VideoRoomSummaryEnumCodec[] | null;
  mediaRegion?: VideoRoomSummaryEnumTwilioRealm;
  durationSec?: number | null;
  totalParticipantDurationSec?: number | null;
  totalRecordingDurationSec?: number | null;
  processingState?: VideoRoomSummaryEnumProcessingState;
  recordingEnabled?: boolean | null;
  edgeLocation?: VideoRoomSummaryEnumEdgeLocation;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const insightsV1VideoRoomSummarySchema: Schema<InsightsV1VideoRoomSummary> =
  s.object<InsightsV1VideoRoomSummary>({
    accountSid: s.optionalNullable(s.string()),
    roomSid: s.optionalNullable(s.string()),
    roomName: s.optionalNullable(s.string()),
    createTime: s.optionalNullable(s.dateTime()),
    endTime: s.optionalNullable(s.dateTime()),
    roomType: s.optional(s.lazy(() => videoRoomSummaryEnumRoomTypeSchema)),
    roomStatus: s.optional(s.lazy(() => videoRoomSummaryEnumRoomStatusSchema)),
    statusCallback: s.optionalNullable(s.string()),
    statusCallbackMethod: s.optionalNullable(s.lazy(() => amdStatusCallbackMethodSchema)),
    createdMethod: s.optional(s.lazy(() => videoRoomSummaryEnumCreatedMethodSchema)),
    endReason: s.optional(s.lazy(() => videoRoomSummaryEnumEndReasonSchema)),
    maxParticipants: s.optionalNullable(s.number()),
    uniqueParticipants: s.optionalNullable(s.number()),
    uniqueParticipantIdentities: s.optionalNullable(s.number()),
    concurrentParticipants: s.optionalNullable(s.number()),
    maxConcurrentParticipants: s.optionalNullable(s.number()),
    codecs: s.optionalNullable(s.array(s.lazy(() => videoRoomSummaryEnumCodecSchema))),
    mediaRegion: s.optional(s.lazy(() => videoRoomSummaryEnumTwilioRealmSchema)),
    durationSec: s.optionalNullable(s.number()),
    totalParticipantDurationSec: s.optionalNullable(s.number()),
    totalRecordingDurationSec: s.optionalNullable(s.number()),
    processingState: s.optional(s.lazy(() => videoRoomSummaryEnumProcessingStateSchema)),
    recordingEnabled: s.optionalNullable(s.boolean()),
    edgeLocation: s.optional(s.lazy(() => videoRoomSummaryEnumEdgeLocationSchema)),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountSid: "account_sid",
      roomSid: "room_sid",
      roomName: "room_name",
      createTime: "create_time",
      endTime: "end_time",
      roomType: "room_type",
      roomStatus: "room_status",
      statusCallback: "status_callback",
      statusCallbackMethod: "status_callback_method",
      createdMethod: "created_method",
      endReason: "end_reason",
      maxParticipants: "max_participants",
      uniqueParticipants: "unique_participants",
      uniqueParticipantIdentities: "unique_participant_identities",
      concurrentParticipants: "concurrent_participants",
      maxConcurrentParticipants: "max_concurrent_participants",
      mediaRegion: "media_region",
      durationSec: "duration_sec",
      totalParticipantDurationSec: "total_participant_duration_sec",
      totalRecordingDurationSec: "total_recording_duration_sec",
      processingState: "processing_state",
      recordingEnabled: "recording_enabled",
      edgeLocation: "edge_location",
    },
  });
