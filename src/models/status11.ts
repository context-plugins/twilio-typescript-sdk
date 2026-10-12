import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Current status of the Action.
 * - PENDING: Action accepted, awaiting downstream confirmation
 * - COMPLETED: Downstream backend confirmed the action
 * - FAILED: Downstream backend reported a failure
 */
export const Status11 = {
  Pending: "PENDING",
  Completed: "COMPLETED",
  Failed: "FAILED",
} as const;
export type Status11 = (typeof Status11)[keyof typeof Status11] | (string & {});

export const status11Schema: EnumSchema<Status11> = s.enumOf<Status11>(Status11);
