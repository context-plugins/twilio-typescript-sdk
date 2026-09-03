import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
