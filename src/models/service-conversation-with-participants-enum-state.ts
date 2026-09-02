import { s, type EnumSchema } from "../core/index.js";

export const ServiceConversationWithParticipantsEnumState = {
  Initializing: "initializing",
  Inactive: "inactive",
  Active: "active",
  Closed: "closed",
} as const;
export type ServiceConversationWithParticipantsEnumState =
  | (typeof ServiceConversationWithParticipantsEnumState)[keyof typeof ServiceConversationWithParticipantsEnumState]
  | (string & {});

export const serviceConversationWithParticipantsEnumStateSchema: EnumSchema<ServiceConversationWithParticipantsEnumState> =
  s.enumOf<ServiceConversationWithParticipantsEnumState>(ServiceConversationWithParticipantsEnumState);
