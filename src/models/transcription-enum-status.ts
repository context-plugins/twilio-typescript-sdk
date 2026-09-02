import { s, type EnumSchema } from "../core/index.js";

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
