import { s, type EnumSchema } from "../core/index.js";

export const RealtimeTranscriptionEnumStatus = {
  InProgress: "in-progress",
  Stopped: "stopped",
} as const;
export type RealtimeTranscriptionEnumStatus =
  | (typeof RealtimeTranscriptionEnumStatus)[keyof typeof RealtimeTranscriptionEnumStatus]
  | (string & {});

export const realtimeTranscriptionEnumStatusSchema: EnumSchema<RealtimeTranscriptionEnumStatus> =
  s.enumOf<RealtimeTranscriptionEnumStatus>(RealtimeTranscriptionEnumStatus);
