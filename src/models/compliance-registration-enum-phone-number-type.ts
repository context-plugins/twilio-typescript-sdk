import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of phone number of the Bundle's ownership request. Can be `local`, `mobile`, `national`,
 * or `toll-free`.
 */
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
