import { s, type EnumSchema } from "../core/index.js";

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
