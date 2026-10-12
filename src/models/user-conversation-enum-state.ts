import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current state of this User Conversation. One of `inactive`, `active` or `closed`. */
export const UserConversationEnumState = {
  Inactive: "inactive",
  Active: "active",
  Closed: "closed",
} as const;
export type UserConversationEnumState =
  | (typeof UserConversationEnumState)[keyof typeof UserConversationEnumState]
  | (string & {});

export const userConversationEnumStateSchema: EnumSchema<UserConversationEnumState> =
  s.enumOf<UserConversationEnumState>(UserConversationEnumState);
