import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the recording. Can be: `processing`, `completed`, or `deleted`. `processing`
 * indicates the recording is still being captured; `completed` indicates the recording has been
 * captured and is now available for download. `deleted` means the recording media has been deleted
 * from the system, but its metadata is still available.
 */
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
