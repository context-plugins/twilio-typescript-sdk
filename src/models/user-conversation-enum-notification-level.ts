import { s, type EnumSchema } from "../core/index.js";

export const UserConversationEnumNotificationLevel = {
  Default: "default",
  Muted: "muted",
} as const;
export type UserConversationEnumNotificationLevel =
  | (typeof UserConversationEnumNotificationLevel)[keyof typeof UserConversationEnumNotificationLevel]
  | (string & {});

export const userConversationEnumNotificationLevelSchema: EnumSchema<UserConversationEnumNotificationLevel> =
  s.enumOf<UserConversationEnumNotificationLevel>(UserConversationEnumNotificationLevel);
