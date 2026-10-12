import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Percentage of calls made in each state. */
export type CallStatePercentage = {
  /** Percentage of completed inbound calls. */
  completed?: number;
  /** Percentage of failed inbound calls. */
  fail?: number;
  /** Percentage of busy inbound calls. */
  busy?: number;
  /** Percentage of no-answer inbound calls. */
  noanswer?: number;
  /** Percentage of canceled inbound calls. */
  canceled?: number;
};

export const callStatePercentageSchema: Schema<CallStatePercentage> = s.object<CallStatePercentage>({
  completed: s.optional(s.float64()),
  fail: s.optional(s.float64()),
  busy: s.optional(s.float64()),
  noanswer: s.optional(s.float64()),
  canceled: s.optional(s.float64()),
});
