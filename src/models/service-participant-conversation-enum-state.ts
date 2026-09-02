import { s, type EnumSchema } from "../core/index.js";

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
