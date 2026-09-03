import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
