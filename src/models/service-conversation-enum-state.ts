import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
