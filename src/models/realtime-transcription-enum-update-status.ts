import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RealtimeTranscriptionEnumUpdateStatus = {
  Stopped: "stopped",
} as const;
export type RealtimeTranscriptionEnumUpdateStatus =
  | (typeof RealtimeTranscriptionEnumUpdateStatus)[keyof typeof RealtimeTranscriptionEnumUpdateStatus]
  | (string & {});

export const realtimeTranscriptionEnumUpdateStatusSchema: EnumSchema<RealtimeTranscriptionEnumUpdateStatus> =
  s.enumOf<RealtimeTranscriptionEnumUpdateStatus>(RealtimeTranscriptionEnumUpdateStatus);
