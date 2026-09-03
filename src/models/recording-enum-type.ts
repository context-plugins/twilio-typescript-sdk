import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RecordingEnumType = {
  Audio: "audio",
  Video: "video",
  Data: "data",
} as const;
export type RecordingEnumType = (typeof RecordingEnumType)[keyof typeof RecordingEnumType] | (string & {});

export const recordingEnumTypeSchema: EnumSchema<RecordingEnumType> =
  s.enumOf<RecordingEnumType>(RecordingEnumType);
