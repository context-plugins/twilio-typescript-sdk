import { s, type EnumSchema } from "../core/index.js";

export const RecordingTranscriptionEnumStatus = {
  InProgress: "in-progress",
  Completed: "completed",
  Failed: "failed",
} as const;
export type RecordingTranscriptionEnumStatus =
  | (typeof RecordingTranscriptionEnumStatus)[keyof typeof RecordingTranscriptionEnumStatus]
  | (string & {});

export const recordingTranscriptionEnumStatusSchema: EnumSchema<RecordingTranscriptionEnumStatus> =
  s.enumOf<RecordingTranscriptionEnumStatus>(RecordingTranscriptionEnumStatus);
