import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the Participant. Can be: `connected` or `disconnected`. */
export const RoomParticipantEnumStatus = {
  Connected: "connected",
  Disconnected: "disconnected",
  Reconnecting: "reconnecting",
} as const;
export type RoomParticipantEnumStatus =
  | (typeof RoomParticipantEnumStatus)[keyof typeof RoomParticipantEnumStatus]
  | (string & {});

export const roomParticipantEnumStatusSchema: EnumSchema<RoomParticipantEnumStatus> =
  s.enumOf<RoomParticipantEnumStatus>(RoomParticipantEnumStatus);
