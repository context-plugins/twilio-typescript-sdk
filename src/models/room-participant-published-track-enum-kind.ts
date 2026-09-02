import { s, type EnumSchema } from "../core/index.js";

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
