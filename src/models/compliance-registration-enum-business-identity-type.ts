import { s, type EnumSchema } from "../core/index.js";

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
