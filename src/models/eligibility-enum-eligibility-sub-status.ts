import { s, type EnumSchema } from "../core/index.js";

export const EligibilityEnumEligibilitySubStatus = {
  CountryIneligible: "country-ineligible",
  NumberFormatIneligible: "number-format-ineligible",
  NumberTypeIneligible: "number-type-ineligible",
  CarrierIneligible: "carrier-ineligible",
  AlreadyInTwilio: "already-in-twilio",
  InternalProcessingError: "internal-processing-error",
  InvalidPhoneNumber: "invalid-phone-number",
  InvalidHostingAccountSid: "invalid-hosting-account-sid",
  Eligible: "eligible",
} as const;
export type EligibilityEnumEligibilitySubStatus =
  | (typeof EligibilityEnumEligibilitySubStatus)[keyof typeof EligibilityEnumEligibilitySubStatus]
  | (string & {});

export const eligibilityEnumEligibilitySubStatusSchema: EnumSchema<EligibilityEnumEligibilitySubStatus> =
  s.enumOf<EligibilityEnumEligibilitySubStatus>(EligibilityEnumEligibilitySubStatus);
