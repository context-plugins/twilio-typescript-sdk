import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ServiceUserConversationEnumNotificationLevel = {
  Default: "default",
  Muted: "muted",
} as const;
export type ServiceUserConversationEnumNotificationLevel =
  | (typeof ServiceUserConversationEnumNotificationLevel)[keyof typeof ServiceUserConversationEnumNotificationLevel]
  | (string & {});

export const serviceUserConversationEnumNotificationLevelSchema: EnumSchema<ServiceUserConversationEnumNotificationLevel> =
  s.enumOf<ServiceUserConversationEnumNotificationLevel>(ServiceUserConversationEnumNotificationLevel);
