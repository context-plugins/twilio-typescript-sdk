import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BulkEligibilityEnumEligibilitySubStatus = {
  CountryIneligible: "country-ineligible",
  NumberFormatIneligible: "number-format-ineligible",
  NumberTypeIneligible: "number-type-ineligible",
  CarrierIneligible: "carrier-ineligible",
  AlreadyInTwilio: "already-in-twilio",
  InternalProcessingError: "internal-processing-error",
  InvalidPhoneNumber: "invalid-phone-number",
  InvalidHostingAccountSid: "invalid-hosting-account-sid",
  Eligible: "eligible",
  EligibleByManualProcess: "eligible-by-manual-process",
} as const;
export type BulkEligibilityEnumEligibilitySubStatus =
  | (typeof BulkEligibilityEnumEligibilitySubStatus)[keyof typeof BulkEligibilityEnumEligibilitySubStatus]
  | (string & {});

export const bulkEligibilityEnumEligibilitySubStatusSchema: EnumSchema<BulkEligibilityEnumEligibilitySubStatus> =
  s.enumOf<BulkEligibilityEnumEligibilitySubStatus>(BulkEligibilityEnumEligibilitySubStatus);
