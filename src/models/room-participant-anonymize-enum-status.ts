import { s, type EnumSchema } from "../core/index.js";

export const RoomParticipantAnonymizeEnumStatus = {
  Connected: "connected",
  Disconnected: "disconnected",
} as const;
export type RoomParticipantAnonymizeEnumStatus =
  | (typeof RoomParticipantAnonymizeEnumStatus)[keyof typeof RoomParticipantAnonymizeEnumStatus]
  | (string & {});

export const roomParticipantAnonymizeEnumStatusSchema: EnumSchema<RoomParticipantAnonymizeEnumStatus> =
  s.enumOf<RoomParticipantAnonymizeEnumStatus>(RoomParticipantAnonymizeEnumStatus);
