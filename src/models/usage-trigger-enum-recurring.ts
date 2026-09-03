import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
