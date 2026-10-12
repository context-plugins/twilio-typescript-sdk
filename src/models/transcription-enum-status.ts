import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the transcription. Can be: `in-progress`, `completed`, `failed`. */
export const TranscriptionEnumStatus = {
  InProgress: "in-progress",
  Completed: "completed",
  Failed: "failed",
} as const;
export type TranscriptionEnumStatus =
  | (typeof TranscriptionEnumStatus)[keyof typeof TranscriptionEnumStatus]
  | (string & {});

export const transcriptionEnumStatusSchema: EnumSchema<TranscriptionEnumStatus> =
  s.enumOf<TranscriptionEnumStatus>(TranscriptionEnumStatus);
