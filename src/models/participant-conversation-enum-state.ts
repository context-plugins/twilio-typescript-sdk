import { s, type EnumSchema } from "../core/index.js";

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
