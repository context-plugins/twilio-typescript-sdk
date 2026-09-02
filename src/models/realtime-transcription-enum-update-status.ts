import { s, type EnumSchema } from "../core/index.js";

export const RealtimeTranscriptionEnumUpdateStatus = {
  Stopped: "stopped",
} as const;
export type RealtimeTranscriptionEnumUpdateStatus =
  | (typeof RealtimeTranscriptionEnumUpdateStatus)[keyof typeof RealtimeTranscriptionEnumUpdateStatus]
  | (string & {});

export const realtimeTranscriptionEnumUpdateStatusSchema: EnumSchema<RealtimeTranscriptionEnumUpdateStatus> =
  s.enumOf<RealtimeTranscriptionEnumUpdateStatus>(RealtimeTranscriptionEnumUpdateStatus);
