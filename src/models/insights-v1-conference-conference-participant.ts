import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conferenceParticipantEnumCallDirectionSchema,
  type ConferenceParticipantEnumCallDirection,
} from "./conference-participant-enum-call-direction.js";
import {
  conferenceParticipantEnumCallStatusSchema,
  type ConferenceParticipantEnumCallStatus,
} from "./conference-participant-enum-call-status.js";
import {
  conferenceParticipantEnumCallTypeSchema,
  type ConferenceParticipantEnumCallType,
} from "./conference-participant-enum-call-type.js";
import {
  conferenceParticipantEnumJitterBufferSizeSchema,
  type ConferenceParticipantEnumJitterBufferSize,
} from "./conference-participant-enum-jitter-buffer-size.js";
import {
  conferenceParticipantEnumProcessingStateSchema,
  type ConferenceParticipantEnumProcessingState,
} from "./conference-participant-enum-processing-state.js";
import {
  conferenceParticipantEnumRegionSchema,
  type ConferenceParticipantEnumRegion,
} from "./conference-participant-enum-region.js";

export type InsightsV1ConferenceConferenceParticipant = {
  /** SID for this participant. */
  participantSid?: string | null;
  /** The user-specified label of this participant. */
  label?: string | null;
  /** The unique SID identifier of the Conference. */
  conferenceSid?: string | null;
  /** Unique SID identifier of the call that generated the Participant resource. */
  callSid?: string | null;
  /** The unique SID identifier of the Account. */
  accountSid?: string | null;
  callDirection?: ConferenceParticipantEnumCallDirection;
  /** Caller ID of the calling party. */
  from?: string | null;
  /** Called party. */
  to?: string | null;
  callStatus?: ConferenceParticipantEnumCallStatus;
  /** ISO alpha-2 country code of the participant based on caller ID or called number. */
  countryCode?: string | null;
  /**
   * Boolean. Indicates whether participant had startConferenceOnEnter=true or
   * endConferenceOnExit=true.
   */
  isModerator?: boolean | null;
  /** ISO 8601 timestamp of participant join event. */
  joinTime?: Date | null;
  /** ISO 8601 timestamp of participant leave event. */
  leaveTime?: Date | null;
  /** Participant durations in seconds. */
  durationSeconds?: number | null;
  /** Add Participant API only. Estimated time in queue at call creation. */
  outboundQueueLength?: number | null;
  /** Add Participant API only. Actual time in queue in seconds. */
  outboundTimeInQueue?: number | null;
  jitterBufferSize?: ConferenceParticipantEnumJitterBufferSize;
  /** Boolean. Indicated whether participant was a coach. */
  isCoach?: boolean | null;
  /** Call SIDs coached by this participant. */
  coachedParticipants?: string[] | null;
  participantRegion?: ConferenceParticipantEnumRegion;
  conferenceRegion?: ConferenceParticipantEnumRegion;
  callType?: ConferenceParticipantEnumCallType;
  processingState?: ConferenceParticipantEnumProcessingState;
  /** Participant properties and metadata. */
  properties?: Record<string, unknown> | null;
  /**
   * Object containing information of actions taken by participants. Contains a dictionary of URL
   * links to nested resources of this Conference Participant.
   */
  events?: Record<string, unknown> | null;
  /** Object. Contains participant call quality metrics. */
  metrics?: Record<string, unknown> | null;
  /** The URL of this resource. */
  url?: string | null;
};

export const insightsV1ConferenceConferenceParticipantSchema: Schema<InsightsV1ConferenceConferenceParticipant> =
  s.object<InsightsV1ConferenceConferenceParticipant>({
    participantSid: s.optionalNullable(s.string()),
    label: s.optionalNullable(s.string()),
    conferenceSid: s.optionalNullable(s.string()),
    callSid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    callDirection: s.optional(s.lazy(() => conferenceParticipantEnumCallDirectionSchema)),
    from: s.optionalNullable(s.string()),
    to: s.optionalNullable(s.string()),
    callStatus: s.optional(s.lazy(() => conferenceParticipantEnumCallStatusSchema)),
    countryCode: s.optionalNullable(s.string()),
    isModerator: s.optionalNullable(s.boolean()),
    joinTime: s.optionalNullable(s.dateTime()),
    leaveTime: s.optionalNullable(s.dateTime()),
    durationSeconds: s.optionalNullable(s.int()),
    outboundQueueLength: s.optionalNullable(s.int()),
    outboundTimeInQueue: s.optionalNullable(s.int()),
    jitterBufferSize: s.optional(s.lazy(() => conferenceParticipantEnumJitterBufferSizeSchema)),
    isCoach: s.optionalNullable(s.boolean()),
    coachedParticipants: s.optionalNullable(s.array(s.string())),
    participantRegion: s.optional(s.lazy(() => conferenceParticipantEnumRegionSchema)),
    conferenceRegion: s.optional(s.lazy(() => conferenceParticipantEnumRegionSchema)),
    callType: s.optional(s.lazy(() => conferenceParticipantEnumCallTypeSchema)),
    processingState: s.optional(s.lazy(() => conferenceParticipantEnumProcessingStateSchema)),
    properties: s.optionalNullable(s.record(s.string(), s.unknown())),
    events: s.optionalNullable(s.record(s.string(), s.unknown())),
    metrics: s.optionalNullable(s.record(s.string(), s.unknown())),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      participantSid: "participant_sid",
      conferenceSid: "conference_sid",
      callSid: "call_sid",
      accountSid: "account_sid",
      callDirection: "call_direction",
      callStatus: "call_status",
      countryCode: "country_code",
      isModerator: "is_moderator",
      joinTime: "join_time",
      leaveTime: "leave_time",
      durationSeconds: "duration_seconds",
      outboundQueueLength: "outbound_queue_length",
      outboundTimeInQueue: "outbound_time_in_queue",
      jitterBufferSize: "jitter_buffer_size",
      isCoach: "is_coach",
      coachedParticipants: "coached_participants",
      participantRegion: "participant_region",
      conferenceRegion: "conference_region",
      callType: "call_type",
      processingState: "processing_state",
    },
  });
