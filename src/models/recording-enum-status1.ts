import { s, type EnumSchema } from "../core/index.js";

export const RecordingEnumStatus1 = {
  Processing: "processing",
  Completed: "completed",
  Deleted: "deleted",
  Failed: "failed",
} as const;
export type RecordingEnumStatus1 =
  | (typeof RecordingEnumStatus1)[keyof typeof RecordingEnumStatus1]
  | (string & {});

export const recordingEnumStatus1Schema: EnumSchema<RecordingEnumStatus1> =
  s.enumOf<RecordingEnumStatus1>(RecordingEnumStatus1);
