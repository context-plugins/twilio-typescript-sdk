import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CallRecordingEnumStatus = {
  InProgress: "in-progress",
  Paused: "paused",
  Stopped: "stopped",
  Processing: "processing",
  Completed: "completed",
  Absent: "absent",
} as const;
export type CallRecordingEnumStatus =
  | (typeof CallRecordingEnumStatus)[keyof typeof CallRecordingEnumStatus]
  | (string & {});

export const callRecordingEnumStatusSchema: EnumSchema<CallRecordingEnumStatus> =
  s.enumOf<CallRecordingEnumStatus>(CallRecordingEnumStatus);
