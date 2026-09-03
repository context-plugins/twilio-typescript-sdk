import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RoomRecordingEnumType = {
  Audio: "audio",
  Video: "video",
  Data: "data",
} as const;
export type RoomRecordingEnumType =
  | (typeof RoomRecordingEnumType)[keyof typeof RoomRecordingEnumType]
  | (string & {});

export const roomRecordingEnumTypeSchema: EnumSchema<RoomRecordingEnumType> =
  s.enumOf<RoomRecordingEnumType>(RoomRecordingEnumType);
