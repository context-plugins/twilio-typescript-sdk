import { s, type EnumSchema } from "../core/index.js";

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
