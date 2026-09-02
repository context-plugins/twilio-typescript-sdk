import { s, type EnumSchema } from "../core/index.js";

export const ServiceUserConversationEnumState = {
  Inactive: "inactive",
  Active: "active",
  Closed: "closed",
} as const;
export type ServiceUserConversationEnumState =
  | (typeof ServiceUserConversationEnumState)[keyof typeof ServiceUserConversationEnumState]
  | (string & {});

export const serviceUserConversationEnumStateSchema: EnumSchema<ServiceUserConversationEnumState> =
  s.enumOf<ServiceUserConversationEnumState>(ServiceUserConversationEnumState);
