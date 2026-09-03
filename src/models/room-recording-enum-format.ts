import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RoomRecordingEnumFormat = {
  Mka: "mka",
  Mkv: "mkv",
} as const;
export type RoomRecordingEnumFormat =
  | (typeof RoomRecordingEnumFormat)[keyof typeof RoomRecordingEnumFormat]
  | (string & {});

export const roomRecordingEnumFormatSchema: EnumSchema<RoomRecordingEnumFormat> =
  s.enumOf<RoomRecordingEnumFormat>(RoomRecordingEnumFormat);
