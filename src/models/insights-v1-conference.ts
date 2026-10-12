import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
  /** The unique SID identifier of the Conference. */
  conferenceSid?: string | null;
  /** The unique SID identifier of the Account. */
  accountSid?: string | null;
  /** Custom label for the conference resource, up to 64 characters. */
  friendlyName?: string | null;
  /** Conference creation date and time in ISO 8601 format. */
  createTime?: Date | null;
  /**
   * Timestamp in ISO 8601 format when the conference started. Conferences do not start until at
   * least two participants join, at least one of whom has startConferenceOnEnter=true.
   */
  startTime?: Date | null;
  /** Conference end date and time in ISO 8601 format. */
  endTime?: Date | null;
  /** Conference duration in seconds. */
  durationSeconds?: number | null;
  /** Duration of the between conference start event and conference end event in seconds. */
  connectDurationSeconds?: number | null;
  status?: ConferenceEnumConferenceStatus;
  /** Maximum number of concurrent participants as specified by the configuration. */
  maxParticipants?: number | null;
  /** Actual maximum number of concurrent participants in the conference. */
  maxConcurrentParticipants?: number | null;
  /** Unique conference participants based on caller ID. */
  uniqueParticipants?: number | null;
  endReason?: ConferenceEnumConferenceEndReason;
  /** Call SID of the participant whose actions ended the conference. */
  endedBy?: string | null;
  mixerRegion?: ConferenceEnumRegion;
  mixerRegionRequested?: ConferenceEnumRegion;
  /** Boolean. Indicates whether recording was enabled at the conference mixer. */
  recordingEnabled?: boolean | null;
  /** Potential issues detected by Twilio during the conference. */
  detectedIssues?: Record<string, unknown> | null;
  /** Tags for detected conference conditions and participant behaviors which may be of interest. */
  tags?: ConferenceEnumTag[] | null;
  /** Object. Contains details about conference tags including severity. */
  tagInfo?: Record<string, unknown> | null;
  processingState?: ConferenceEnumProcessingState;
  /** The URL of this resource. */
  url?: string | null;
  /** Contains a dictionary of URL links to nested resources of this Conference. */
  links?: Record<string, unknown> | null;
};

export const insightsV1ConferenceSchema: Schema<InsightsV1Conference> = s.object<InsightsV1Conference>({
  conferenceSid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  createTime: s.optionalNullable(s.dateTime()),
  startTime: s.optionalNullable(s.dateTime()),
  endTime: s.optionalNullable(s.dateTime()),
  durationSeconds: s.optionalNullable(s.int()),
  connectDurationSeconds: s.optionalNullable(s.int()),
  status: s.optional(s.lazy(() => conferenceEnumConferenceStatusSchema)),
  maxParticipants: s.optionalNullable(s.int()),
  maxConcurrentParticipants: s.optionalNullable(s.int()),
  uniqueParticipants: s.optionalNullable(s.int()),
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
