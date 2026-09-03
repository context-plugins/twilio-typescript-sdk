import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
