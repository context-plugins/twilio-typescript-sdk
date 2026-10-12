import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the recording. Can be: `processing`, `completed`, or `deleted`. `processing`
 * indicates the Recording is still being captured. `completed` indicates the Recording has been
 * captured and is now available for download. `deleted` means the recording media has been deleted
 * from the system, but its metadata is still available for historical purposes.
 */
export const RoomRecordingEnumStatus = {
  Processing: "processing",
  Completed: "completed",
  Deleted: "deleted",
  Failed: "failed",
} as const;
export type RoomRecordingEnumStatus =
  | (typeof RoomRecordingEnumStatus)[keyof typeof RoomRecordingEnumStatus]
  | (string & {});

export const roomRecordingEnumStatusSchema: EnumSchema<RoomRecordingEnumStatus> =
  s.enumOf<RoomRecordingEnumStatus>(RoomRecordingEnumStatus);
