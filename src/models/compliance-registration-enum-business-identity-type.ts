import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of business identity. Can be `direct customer` or `ISV`. */
export const ComplianceRegistrationEnumBusinessIdentityType = {
  DirectCustomer: "direct_customer",
  IsvResellerOrPartner: "isv_reseller_or_partner",
  Unknown: "unknown",
} as const;
export type ComplianceRegistrationEnumBusinessIdentityType =
  | (typeof ComplianceRegistrationEnumBusinessIdentityType)[keyof typeof ComplianceRegistrationEnumBusinessIdentityType]
  | (string & {});

export const complianceRegistrationEnumBusinessIdentityTypeSchema: EnumSchema<ComplianceRegistrationEnumBusinessIdentityType> =
  s.enumOf<ComplianceRegistrationEnumBusinessIdentityType>(ComplianceRegistrationEnumBusinessIdentityType);
