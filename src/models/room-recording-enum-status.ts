import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
