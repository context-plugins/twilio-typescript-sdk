import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Percentage of calls made in each state. */
export type CallStatePercentage1 = {
  /** Percentage of completed outbound calls. */
  completed?: number;
  /** Percentage of failed outbound calls. */
  fail?: number;
  /** Percentage of busy outbound calls. */
  busy?: number;
  /** Percentage of no-answer outbound calls. */
  noanswer?: number;
  /** Percentage of canceled outbound calls. */
  canceled?: number;
};

export const callStatePercentage1Schema: Schema<CallStatePercentage1> = s.object<CallStatePercentage1>({
  completed: s.optional(s.float64()),
  fail: s.optional(s.float64()),
  busy: s.optional(s.float64()),
  noanswer: s.optional(s.float64()),
  canceled: s.optional(s.float64()),
});
