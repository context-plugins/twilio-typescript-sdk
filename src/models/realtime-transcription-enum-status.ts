import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status - one of `stopped`, `in-flight` */
export const RealtimeTranscriptionEnumStatus = {
  InProgress: "in-progress",
  Stopped: "stopped",
} as const;
export type RealtimeTranscriptionEnumStatus =
  | (typeof RealtimeTranscriptionEnumStatus)[keyof typeof RealtimeTranscriptionEnumStatus]
  | (string & {});

export const realtimeTranscriptionEnumStatusSchema: EnumSchema<RealtimeTranscriptionEnumStatus> =
  s.enumOf<RealtimeTranscriptionEnumStatus>(RealtimeTranscriptionEnumStatus);
