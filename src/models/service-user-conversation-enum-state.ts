import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current state of this User Conversation. One of `inactive`, `active` or `closed`. */
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
