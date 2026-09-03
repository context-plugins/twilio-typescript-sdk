import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ServiceParticipantConversationEnumState = {
  Inactive: "inactive",
  Active: "active",
  Closed: "closed",
} as const;
export type ServiceParticipantConversationEnumState =
  | (typeof ServiceParticipantConversationEnumState)[keyof typeof ServiceParticipantConversationEnumState]
  | (string & {});

export const serviceParticipantConversationEnumStateSchema: EnumSchema<ServiceParticipantConversationEnumState> =
  s.enumOf<ServiceParticipantConversationEnumState>(ServiceParticipantConversationEnumState);
