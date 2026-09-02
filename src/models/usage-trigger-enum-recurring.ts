import { s, type EnumSchema } from "../core/index.js";

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
