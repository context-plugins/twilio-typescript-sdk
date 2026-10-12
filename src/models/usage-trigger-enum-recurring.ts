import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The frequency of a recurring UsageTrigger. Can be: `daily`, `monthly`, or `yearly` for recurring
 * triggers or empty for non-recurring triggers. A trigger will only fire once during each period.
 * Recurring times are in GMT.
 */
export const UsageTriggerEnumRecurring = {
  Daily: "daily",
  Monthly: "monthly",
  Yearly: "yearly",
  Alltime: "alltime",
} as const;
export type UsageTriggerEnumRecurring =
  | (typeof UsageTriggerEnumRecurring)[keyof typeof UsageTriggerEnumRecurring]
  | (string & {});

export const usageTriggerEnumRecurringSchema: EnumSchema<UsageTriggerEnumRecurring> =
  s.enumOf<UsageTriggerEnumRecurring>(UsageTriggerEnumRecurring);
