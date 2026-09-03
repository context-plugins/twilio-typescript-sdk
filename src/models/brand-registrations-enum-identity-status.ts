import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BrandRegistrationsEnumIdentityStatus = {
  SelfDeclared: "SELF_DECLARED",
  Unverified: "UNVERIFIED",
  Verified: "VERIFIED",
  VettedVerified: "VETTED_VERIFIED",
} as const;
export type BrandRegistrationsEnumIdentityStatus =
  | (typeof BrandRegistrationsEnumIdentityStatus)[keyof typeof BrandRegistrationsEnumIdentityStatus]
  | (string & {});

export const brandRegistrationsEnumIdentityStatusSchema: EnumSchema<BrandRegistrationsEnumIdentityStatus> =
  s.enumOf<BrandRegistrationsEnumIdentityStatus>(BrandRegistrationsEnumIdentityStatus);
