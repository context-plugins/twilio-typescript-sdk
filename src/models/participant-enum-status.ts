import { s, type EnumSchema } from "../core/index.js";

export const ParticipantEnumStatus = {
  Queued: "queued",
  Connecting: "connecting",
  Ringing: "ringing",
  Connected: "connected",
  Complete: "complete",
  Failed: "failed",
} as const;
export type ParticipantEnumStatus =
  | (typeof ParticipantEnumStatus)[keyof typeof ParticipantEnumStatus]
  | (string & {});

export const participantEnumStatusSchema: EnumSchema<ParticipantEnumStatus> =
  s.enumOf<ParticipantEnumStatus>(ParticipantEnumStatus);
