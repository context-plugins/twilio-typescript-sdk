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
  participantSid?: string | null;
  label?: string | null;
  conferenceSid?: string | null;
  callSid?: string | null;
  accountSid?: string | null;
  callDirection?: ConferenceParticipantEnumCallDirection;
  from?: string | null;
  to?: string | null;
  callStatus?: ConferenceParticipantEnumCallStatus;
  countryCode?: string | null;
  isModerator?: boolean | null;
  joinTime?: Date | null;
  leaveTime?: Date | null;
  durationSeconds?: number | null;
  outboundQueueLength?: number | null;
  outboundTimeInQueue?: number | null;
  jitterBufferSize?: ConferenceParticipantEnumJitterBufferSize;
  isCoach?: boolean | null;
  coachedParticipants?: string[] | null;
  participantRegion?: ConferenceParticipantEnumRegion;
  conferenceRegion?: ConferenceParticipantEnumRegion;
  callType?: ConferenceParticipantEnumCallType;
  processingState?: ConferenceParticipantEnumProcessingState;
  properties?: Record<string, unknown> | null;
  events?: Record<string, unknown> | null;
  metrics?: Record<string, unknown> | null;
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
    durationSeconds: s.optionalNullable(s.number()),
    outboundQueueLength: s.optionalNullable(s.number()),
    outboundTimeInQueue: s.optionalNullable(s.number()),
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
