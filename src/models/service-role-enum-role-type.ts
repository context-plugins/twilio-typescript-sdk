import { s, type EnumSchema } from "../core/index.js";

export const ServiceRoleEnumRoleType = {
  Conversation: "conversation",
  Service: "service",
} as const;
export type ServiceRoleEnumRoleType =
  | (typeof ServiceRoleEnumRoleType)[keyof typeof ServiceRoleEnumRoleType]
  | (string & {});

export const serviceRoleEnumRoleTypeSchema: EnumSchema<ServiceRoleEnumRoleType> =
  s.enumOf<ServiceRoleEnumRoleType>(ServiceRoleEnumRoleType);
