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
  /** Account SID associated with this room. */
  accountSid?: string | null;
  /** Unique identifier for the room. */
  roomSid?: string | null;
  /** Room friendly name. */
  roomName?: string | null;
  /** Creation time of the room. */
  createTime?: Date | null;
  /** End time for the room. */
  endTime?: Date | null;
  roomType?: VideoRoomSummaryEnumRoomType;
  roomStatus?: VideoRoomSummaryEnumRoomStatus;
  /** Webhook provided for status callbacks. */
  statusCallback?: string | null;
  /** HTTP method provided for status callback URL. */
  statusCallbackMethod?: AmdStatusCallbackMethod | null;
  createdMethod?: VideoRoomSummaryEnumCreatedMethod;
  endReason?: VideoRoomSummaryEnumEndReason;
  /** Max number of total participants allowed by the application settings. */
  maxParticipants?: number | null;
  /**
   * Number of participants. May include duplicate identities for participants who left and
   * rejoined.
   */
  uniqueParticipants?: number | null;
  /** Unique number of participant identities. */
  uniqueParticipantIdentities?: number | null;
  /** Actual number of concurrent participants. */
  concurrentParticipants?: number | null;
  /**
   * Maximum number of participants allowed in the room at the same time allowed by the application
   * settings.
   */
  maxConcurrentParticipants?: number | null;
  /** Codecs used by participants in the room. Can be `VP8`, `H264`, or `VP9`. */
  codecs?: VideoRoomSummaryEnumCodec[] | null;
  mediaRegion?: VideoRoomSummaryEnumTwilioRealm;
  /** Total room duration from create time to end time. */
  durationSec?: number | null;
  /** Combined amount of participant time in the room. */
  totalParticipantDurationSec?: number | null;
  /** Combined amount of recorded seconds for participants in the room. */
  totalRecordingDurationSec?: number | null;
  processingState?: VideoRoomSummaryEnumProcessingState;
  /** Boolean indicating if recording is enabled for the room. */
  recordingEnabled?: boolean | null;
  edgeLocation?: VideoRoomSummaryEnumEdgeLocation;
  /** URL for the room resource. */
  url?: string | null;
  /** Room subresources. */
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
    maxParticipants: s.optionalNullable(s.int()),
    uniqueParticipants: s.optionalNullable(s.int()),
    uniqueParticipantIdentities: s.optionalNullable(s.int()),
    concurrentParticipants: s.optionalNullable(s.int()),
    maxConcurrentParticipants: s.optionalNullable(s.int()),
    codecs: s.optionalNullable(s.array(s.lazy(() => videoRoomSummaryEnumCodecSchema))),
    mediaRegion: s.optional(s.lazy(() => videoRoomSummaryEnumTwilioRealmSchema)),
    durationSec: s.optionalNullable(s.int()),
    totalParticipantDurationSec: s.optionalNullable(s.int()),
    totalRecordingDurationSec: s.optionalNullable(s.int()),
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
