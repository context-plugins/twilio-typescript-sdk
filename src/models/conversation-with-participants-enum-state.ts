import { s, type EnumSchema } from "../core/index.js";

export const ConversationWithParticipantsEnumState = {
  Initializing: "initializing",
  Inactive: "inactive",
  Active: "active",
  Closed: "closed",
} as const;
export type ConversationWithParticipantsEnumState =
  | (typeof ConversationWithParticipantsEnumState)[keyof typeof ConversationWithParticipantsEnumState]
  | (string & {});

export const conversationWithParticipantsEnumStateSchema: EnumSchema<ConversationWithParticipantsEnumState> =
  s.enumOf<ConversationWithParticipantsEnumState>(ConversationWithParticipantsEnumState);
