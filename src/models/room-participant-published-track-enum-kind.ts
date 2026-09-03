import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RoomParticipantPublishedTrackEnumKind = {
  Audio: "audio",
  Video: "video",
  Data: "data",
} as const;
export type RoomParticipantPublishedTrackEnumKind =
  | (typeof RoomParticipantPublishedTrackEnumKind)[keyof typeof RoomParticipantPublishedTrackEnumKind]
  | (string & {});

export const roomParticipantPublishedTrackEnumKindSchema: EnumSchema<RoomParticipantPublishedTrackEnumKind> =
  s.enumOf<RoomParticipantPublishedTrackEnumKind>(RoomParticipantPublishedTrackEnumKind);
