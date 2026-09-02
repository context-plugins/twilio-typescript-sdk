import { s, type EnumSchema } from "../core/index.js";

export const ServiceUserConversationEnumNotificationLevel = {
  Default: "default",
  Muted: "muted",
} as const;
export type ServiceUserConversationEnumNotificationLevel =
  | (typeof ServiceUserConversationEnumNotificationLevel)[keyof typeof ServiceUserConversationEnumNotificationLevel]
  | (string & {});

export const serviceUserConversationEnumNotificationLevelSchema: EnumSchema<ServiceUserConversationEnumNotificationLevel> =
  s.enumOf<ServiceUserConversationEnumNotificationLevel>(ServiceUserConversationEnumNotificationLevel);
