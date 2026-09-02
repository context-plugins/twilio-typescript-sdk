import { s, type EnumSchema } from "../core/index.js";

export const ComplianceRegistrationEnumPhoneNumberType = {
  Local: "local",
  National: "national",
  Mobile: "mobile",
  TollFree: "toll-free",
} as const;
export type ComplianceRegistrationEnumPhoneNumberType =
  | (typeof ComplianceRegistrationEnumPhoneNumberType)[keyof typeof ComplianceRegistrationEnumPhoneNumberType]
  | (string & {});

export const complianceRegistrationEnumPhoneNumberTypeSchema: EnumSchema<ComplianceRegistrationEnumPhoneNumberType> =
  s.enumOf<ComplianceRegistrationEnumPhoneNumberType>(ComplianceRegistrationEnumPhoneNumberType);
