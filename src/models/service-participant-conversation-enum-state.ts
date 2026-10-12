import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current state of this User Conversation. One of `inactive`, `active` or `closed`. */
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
