import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Notification Level of this User Conversation. One of `default` or `muted`. */
export const UserConversationEnumNotificationLevel = {
  Default: "default",
  Muted: "muted",
} as const;
export type UserConversationEnumNotificationLevel =
  | (typeof UserConversationEnumNotificationLevel)[keyof typeof UserConversationEnumNotificationLevel]
  | (string & {});

export const userConversationEnumNotificationLevelSchema: EnumSchema<UserConversationEnumNotificationLevel> =
  s.enumOf<UserConversationEnumNotificationLevel>(UserConversationEnumNotificationLevel);
