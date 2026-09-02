import { s, type EnumSchema } from "../core/index.js";

export const ComplianceRegistrationEnumBusinessRegistrationAuthority = {
  UkCrn: "UK:CRN",
  UsEin: "US:EIN",
  CaCbn: "CA:CBN",
  AuAcn: "AU:ACN",
  Other: "Other",
} as const;
export type ComplianceRegistrationEnumBusinessRegistrationAuthority =
  | (typeof ComplianceRegistrationEnumBusinessRegistrationAuthority)[keyof typeof ComplianceRegistrationEnumBusinessRegistrationAuthority]
  | (string & {});

export const complianceRegistrationEnumBusinessRegistrationAuthoritySchema: EnumSchema<ComplianceRegistrationEnumBusinessRegistrationAuthority> =
  s.enumOf<ComplianceRegistrationEnumBusinessRegistrationAuthority>(
    ComplianceRegistrationEnumBusinessRegistrationAuthority,
  );
