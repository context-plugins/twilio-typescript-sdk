import { s, type EnumSchema } from "../core/index.js";

export const RecordingEnumStatus = {
  InProgress: "in-progress",
  Paused: "paused",
  Stopped: "stopped",
  Processing: "processing",
  Completed: "completed",
  Absent: "absent",
  Deleted: "deleted",
} as const;
export type RecordingEnumStatus =
  | (typeof RecordingEnumStatus)[keyof typeof RecordingEnumStatus]
  | (string & {});

export const recordingEnumStatusSchema: EnumSchema<RecordingEnumStatus> =
  s.enumOf<RecordingEnumStatus>(RecordingEnumStatus);
