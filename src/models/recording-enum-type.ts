import { s, type EnumSchema } from "../core/index.js";

export const RecordingEnumType = {
  Audio: "audio",
  Video: "video",
  Data: "data",
} as const;
export type RecordingEnumType = (typeof RecordingEnumType)[keyof typeof RecordingEnumType] | (string & {});

export const recordingEnumTypeSchema: EnumSchema<RecordingEnumType> =
  s.enumOf<RecordingEnumType>(RecordingEnumType);
