import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of role. Can be: `conversation` for
 * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) roles or
 * `service` for [Conversation
 * Service](https://www.twilio.com/docs/conversations/api/service-resource) roles.
 */
export const RoleEnumRoleType = {
  Conversation: "conversation",
  Service: "service",
} as const;
export type RoleEnumRoleType = (typeof RoleEnumRoleType)[keyof typeof RoleEnumRoleType] | (string & {});

export const roleEnumRoleTypeSchema: EnumSchema<RoleEnumRoleType> =
  s.enumOf<RoleEnumRoleType>(RoleEnumRoleType);
