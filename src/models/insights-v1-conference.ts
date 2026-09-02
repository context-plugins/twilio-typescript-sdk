import { s, type Schema } from "../core/index.js";
import {
  conferenceEnumConferenceEndReasonSchema,
  type ConferenceEnumConferenceEndReason,
} from "./conference-enum-conference-end-reason.js";
import {
  conferenceEnumConferenceStatusSchema,
  type ConferenceEnumConferenceStatus,
} from "./conference-enum-conference-status.js";
import {
  conferenceEnumProcessingStateSchema,
  type ConferenceEnumProcessingState,
} from "./conference-enum-processing-state.js";
import { conferenceEnumRegionSchema, type ConferenceEnumRegion } from "./conference-enum-region.js";
import { conferenceEnumTagSchema, type ConferenceEnumTag } from "./conference-enum-tag.js";

export type InsightsV1Conference = {
  conferenceSid?: string | null;
  accountSid?: string | null;
  friendlyName?: string | null;
  createTime?: Date | null;
  startTime?: Date | null;
  endTime?: Date | null;
  durationSeconds?: number | null;
  connectDurationSeconds?: number | null;
  status?: ConferenceEnumConferenceStatus;
  maxParticipants?: number | null;
  maxConcurrentParticipants?: number | null;
  uniqueParticipants?: number | null;
  endReason?: ConferenceEnumConferenceEndReason;
  endedBy?: string | null;
  mixerRegion?: ConferenceEnumRegion;
  mixerRegionRequested?: ConferenceEnumRegion;
  recordingEnabled?: boolean | null;
  detectedIssues?: Record<string, unknown> | null;
  tags?: ConferenceEnumTag[] | null;
  tagInfo?: Record<string, unknown> | null;
  processingState?: ConferenceEnumProcessingState;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const insightsV1ConferenceSchema: Schema<InsightsV1Conference> = s.object<InsightsV1Conference>({
  conferenceSid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  createTime: s.optionalNullable(s.dateTime()),
  startTime: s.optionalNullable(s.dateTime()),
  endTime: s.optionalNullable(s.dateTime()),
  durationSeconds: s.optionalNullable(s.number()),
  connectDurationSeconds: s.optionalNullable(s.number()),
  status: s.optional(s.lazy(() => conferenceEnumConferenceStatusSchema)),
  maxParticipants: s.optionalNullable(s.number()),
  maxConcurrentParticipants: s.optionalNullable(s.number()),
  uniqueParticipants: s.optionalNullable(s.number()),
  endReason: s.optional(s.lazy(() => conferenceEnumConferenceEndReasonSchema)),
  endedBy: s.optionalNullable(s.string()),
  mixerRegion: s.optional(s.lazy(() => conferenceEnumRegionSchema)),
  mixerRegionRequested: s.optional(s.lazy(() => conferenceEnumRegionSchema)),
  recordingEnabled: s.optionalNullable(s.boolean()),
  detectedIssues: s.optionalNullable(s.record(s.string(), s.unknown())),
  tags: s.optionalNullable(s.array(s.lazy(() => conferenceEnumTagSchema))),
  tagInfo: s.optionalNullable(s.record(s.string(), s.unknown())),
  processingState: s.optional(s.lazy(() => conferenceEnumProcessingStateSchema)),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    conferenceSid: "conference_sid",
    accountSid: "account_sid",
    friendlyName: "friendly_name",
    createTime: "create_time",
    startTime: "start_time",
    endTime: "end_time",
    durationSeconds: "duration_seconds",
    connectDurationSeconds: "connect_duration_seconds",
    maxParticipants: "max_participants",
    maxConcurrentParticipants: "max_concurrent_participants",
    uniqueParticipants: "unique_participants",
    endReason: "end_reason",
    endedBy: "ended_by",
    mixerRegion: "mixer_region",
    mixerRegionRequested: "mixer_region_requested",
    recordingEnabled: "recording_enabled",
    detectedIssues: "detected_issues",
    tagInfo: "tag_info",
    processingState: "processing_state",
  },
});
