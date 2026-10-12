import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current status of the operation. */
export const Status21 = {
  Pending: "PENDING",
  Running: "RUNNING",
  Cancelled: "CANCELLED",
  Completed: "COMPLETED",
  Failed: "FAILED",
} as const;
export type Status21 = (typeof Status21)[keyof typeof Status21] | (string & {});

export const status21Schema: EnumSchema<Status21> = s.enumOf<Status21>(Status21);
