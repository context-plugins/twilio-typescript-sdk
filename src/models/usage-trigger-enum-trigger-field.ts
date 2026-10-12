import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The field in the [UsageRecord](https://www.twilio.com/docs/usage/api/usage-record) resource that
 * fires the trigger. Can be: `count`, `usage`, or `price`, as described in the [UsageRecords
 * documentation](https://www.twilio.com/docs/usage/api/usage-record#usage-count-price).
 */
export const UsageTriggerEnumTriggerField = {
  Count: "count",
  Usage: "usage",
  Price: "price",
} as const;
export type UsageTriggerEnumTriggerField =
  | (typeof UsageTriggerEnumTriggerField)[keyof typeof UsageTriggerEnumTriggerField]
  | (string & {});

export const usageTriggerEnumTriggerFieldSchema: EnumSchema<UsageTriggerEnumTriggerField> =
  s.enumOf<UsageTriggerEnumTriggerField>(UsageTriggerEnumTriggerField);
