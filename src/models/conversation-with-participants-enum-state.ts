import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Current state of this conversation. Can be either `initializing`, `active`, `inactive` or
 * `closed` and defaults to `active`
 */
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
