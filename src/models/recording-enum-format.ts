import { s, type EnumSchema } from "../core/index.js";

export const RecordingEnumFormat = {
  Mka: "mka",
  Mkv: "mkv",
} as const;
export type RecordingEnumFormat =
  | (typeof RecordingEnumFormat)[keyof typeof RecordingEnumFormat]
  | (string & {});

export const recordingEnumFormatSchema: EnumSchema<RecordingEnumFormat> =
  s.enumOf<RecordingEnumFormat>(RecordingEnumFormat);
