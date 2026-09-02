import { s, type EnumSchema } from "../core/index.js";

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
