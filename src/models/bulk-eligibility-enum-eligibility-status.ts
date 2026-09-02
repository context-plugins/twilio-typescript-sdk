import { s, type EnumSchema } from "../core/index.js";

export const BulkEligibilityEnumEligibilityStatus = {
  Ineligible: "ineligible",
  Eligible: "eligible",
} as const;
export type BulkEligibilityEnumEligibilityStatus =
  | (typeof BulkEligibilityEnumEligibilityStatus)[keyof typeof BulkEligibilityEnumEligibilityStatus]
  | (string & {});

export const bulkEligibilityEnumEligibilityStatusSchema: EnumSchema<BulkEligibilityEnumEligibilityStatus> =
  s.enumOf<BulkEligibilityEnumEligibilityStatus>(BulkEligibilityEnumEligibilityStatus);
