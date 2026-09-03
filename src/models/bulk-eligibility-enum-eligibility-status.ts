import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BulkEligibilityEnumEligibilityStatus = {
  Ineligible: "ineligible",
  Eligible: "eligible",
} as const;
export type BulkEligibilityEnumEligibilityStatus =
  | (typeof BulkEligibilityEnumEligibilityStatus)[keyof typeof BulkEligibilityEnumEligibilityStatus]
  | (string & {});

export const bulkEligibilityEnumEligibilityStatusSchema: EnumSchema<BulkEligibilityEnumEligibilityStatus> =
  s.enumOf<BulkEligibilityEnumEligibilityStatus>(BulkEligibilityEnumEligibilityStatus);
