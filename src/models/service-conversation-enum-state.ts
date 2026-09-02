import { s, type EnumSchema } from "../core/index.js";

export const ServiceConversationEnumState = {
  Inactive: "inactive",
  Active: "active",
  Closed: "closed",
  Initializing: "initializing",
} as const;
export type ServiceConversationEnumState =
  | (typeof ServiceConversationEnumState)[keyof typeof ServiceConversationEnumState]
  | (string & {});

export const serviceConversationEnumStateSchema: EnumSchema<ServiceConversationEnumState> =
  s.enumOf<ServiceConversationEnumState>(ServiceConversationEnumState);
