import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of role. Can be: `conversation` for
 * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) roles or
 * `service` for [Conversation
 * Service](https://www.twilio.com/docs/conversations/api/service-resource) roles.
 */
export const ServiceRoleEnumRoleType = {
  Conversation: "conversation",
  Service: "service",
} as const;
export type ServiceRoleEnumRoleType =
  | (typeof ServiceRoleEnumRoleType)[keyof typeof ServiceRoleEnumRoleType]
  | (string & {});

export const serviceRoleEnumRoleTypeSchema: EnumSchema<ServiceRoleEnumRoleType> =
  s.enumOf<ServiceRoleEnumRoleType>(ServiceRoleEnumRoleType);
