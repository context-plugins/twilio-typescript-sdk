import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
