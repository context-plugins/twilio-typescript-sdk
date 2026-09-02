import { s, type EnumSchema } from "../core/index.js";

export const RecordingAddOnResultEnumStatus = {
  Canceled: "canceled",
  Completed: "completed",
  Deleted: "deleted",
  Failed: "failed",
  InProgress: "in-progress",
  Init: "init",
  Processing: "processing",
  Queued: "queued",
} as const;
export type RecordingAddOnResultEnumStatus =
  | (typeof RecordingAddOnResultEnumStatus)[keyof typeof RecordingAddOnResultEnumStatus]
  | (string & {});

export const recordingAddOnResultEnumStatusSchema: EnumSchema<RecordingAddOnResultEnumStatus> =
  s.enumOf<RecordingAddOnResultEnumStatus>(RecordingAddOnResultEnumStatus);
