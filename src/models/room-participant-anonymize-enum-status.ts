import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the Participant. Can be: `connected` or `disconnected`. */
export const RoomParticipantAnonymizeEnumStatus = {
  Connected: "connected",
  Disconnected: "disconnected",
} as const;
export type RoomParticipantAnonymizeEnumStatus =
  | (typeof RoomParticipantAnonymizeEnumStatus)[keyof typeof RoomParticipantAnonymizeEnumStatus]
  | (string & {});

export const roomParticipantAnonymizeEnumStatusSchema: EnumSchema<RoomParticipantAnonymizeEnumStatus> =
  s.enumOf<RoomParticipantAnonymizeEnumStatus>(RoomParticipantAnonymizeEnumStatus);
