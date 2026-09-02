import { s, type EnumSchema } from "../core/index.js";

export const RoomRecordingEnumFormat = {
  Mka: "mka",
  Mkv: "mkv",
} as const;
export type RoomRecordingEnumFormat =
  | (typeof RoomRecordingEnumFormat)[keyof typeof RoomRecordingEnumFormat]
  | (string & {});

export const roomRecordingEnumFormatSchema: EnumSchema<RoomRecordingEnumFormat> =
  s.enumOf<RoomRecordingEnumFormat>(RoomRecordingEnumFormat);
