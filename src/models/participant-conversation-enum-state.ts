import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current state of this User Conversation. One of `inactive`, `active` or `closed`. */
export const ParticipantConversationEnumState = {
  Inactive: "inactive",
  Active: "active",
  Closed: "closed",
} as const;
export type ParticipantConversationEnumState =
  | (typeof ParticipantConversationEnumState)[keyof typeof ParticipantConversationEnumState]
  | (string & {});

export const participantConversationEnumStateSchema: EnumSchema<ParticipantConversationEnumState> =
  s.enumOf<ParticipantConversationEnumState>(ParticipantConversationEnumState);
