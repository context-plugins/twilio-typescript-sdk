import { s, type EnumSchema } from "../core/index.js";

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
