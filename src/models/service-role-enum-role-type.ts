import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ServiceRoleEnumRoleType = {
  Conversation: "conversation",
  Service: "service",
} as const;
export type ServiceRoleEnumRoleType =
  | (typeof ServiceRoleEnumRoleType)[keyof typeof ServiceRoleEnumRoleType]
  | (string & {});

export const serviceRoleEnumRoleTypeSchema: EnumSchema<ServiceRoleEnumRoleType> =
  s.enumOf<ServiceRoleEnumRoleType>(ServiceRoleEnumRoleType);
