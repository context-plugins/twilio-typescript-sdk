import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the transcription. Can be: `in-progress`, `completed`, `failed`. */
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
