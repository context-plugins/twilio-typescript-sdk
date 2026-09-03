import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RoomParticipantSubscribedTrackEnumKind = {
  Audio: "audio",
  Video: "video",
  Data: "data",
} as const;
export type RoomParticipantSubscribedTrackEnumKind =
  | (typeof RoomParticipantSubscribedTrackEnumKind)[keyof typeof RoomParticipantSubscribedTrackEnumKind]
  | (string & {});

export const roomParticipantSubscribedTrackEnumKindSchema: EnumSchema<RoomParticipantSubscribedTrackEnumKind> =
  s.enumOf<RoomParticipantSubscribedTrackEnumKind>(RoomParticipantSubscribedTrackEnumKind);
