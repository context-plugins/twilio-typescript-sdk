import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the recording. Can be: `processing`, `completed` and `absent`. For more detailed
 * statuses on in-progress recordings, check out how to [Update a Recording
 * Resource](https://www.twilio.com/docs/voice/api/recording#update-a-recording-resource).
 */
export const ConferenceRecordingEnumStatus = {
  InProgress: "in-progress",
  Paused: "paused",
  Stopped: "stopped",
  Processing: "processing",
  Completed: "completed",
  Absent: "absent",
} as const;
export type ConferenceRecordingEnumStatus =
  | (typeof ConferenceRecordingEnumStatus)[keyof typeof ConferenceRecordingEnumStatus]
  | (string & {});

export const conferenceRecordingEnumStatusSchema: EnumSchema<ConferenceRecordingEnumStatus> =
  s.enumOf<ConferenceRecordingEnumStatus>(ConferenceRecordingEnumStatus);
