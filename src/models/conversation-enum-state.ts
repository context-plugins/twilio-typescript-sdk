import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Current state of this conversation. Can be either `initializing`, `active`, `inactive` or
 * `closed` and defaults to `active`
 */
export const ConversationEnumState = {
  Initializing: "initializing",
  Inactive: "inactive",
  Active: "active",
  Closed: "closed",
} as const;
export type ConversationEnumState =
  | (typeof ConversationEnumState)[keyof typeof ConversationEnumState]
  | (string & {});

export const conversationEnumStateSchema: EnumSchema<ConversationEnumState> =
  s.enumOf<ConversationEnumState>(ConversationEnumState);
