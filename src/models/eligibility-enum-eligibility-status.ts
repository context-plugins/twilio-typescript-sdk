import { s, type EnumSchema } from "../core/index.js";

export const EligibilityEnumEligibilityStatus = {
  Ineligible: "ineligible",
  Eligible: "eligible",
} as const;
export type EligibilityEnumEligibilityStatus =
  | (typeof EligibilityEnumEligibilityStatus)[keyof typeof EligibilityEnumEligibilityStatus]
  | (string & {});

export const eligibilityEnumEligibilityStatusSchema: EnumSchema<EligibilityEnumEligibilityStatus> =
  s.enumOf<EligibilityEnumEligibilityStatus>(EligibilityEnumEligibilityStatus);
