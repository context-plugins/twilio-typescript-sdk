import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RoleEnumRoleType = {
  Conversation: "conversation",
  Service: "service",
} as const;
export type RoleEnumRoleType = (typeof RoleEnumRoleType)[keyof typeof RoleEnumRoleType] | (string & {});

export const roleEnumRoleTypeSchema: EnumSchema<RoleEnumRoleType> =
  s.enumOf<RoleEnumRoleType>(RoleEnumRoleType);
