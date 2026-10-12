import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the Execution. Can be: `active` or `ended`. */
export const ExecutionEnumStatus = {
  Active: "active",
  Ended: "ended",
} as const;
export type ExecutionEnumStatus =
  | (typeof ExecutionEnumStatus)[keyof typeof ExecutionEnumStatus]
  | (string & {});

export const executionEnumStatusSchema: EnumSchema<ExecutionEnumStatus> =
  s.enumOf<ExecutionEnumStatus>(ExecutionEnumStatus);
