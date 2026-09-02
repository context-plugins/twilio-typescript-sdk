import { s, type EnumSchema } from "../core/index.js";

export const RoleEnumRoleType = {
  Conversation: "conversation",
  Service: "service",
} as const;
export type RoleEnumRoleType = (typeof RoleEnumRoleType)[keyof typeof RoleEnumRoleType] | (string & {});

export const roleEnumRoleTypeSchema: EnumSchema<RoleEnumRoleType> =
  s.enumOf<RoleEnumRoleType>(RoleEnumRoleType);
