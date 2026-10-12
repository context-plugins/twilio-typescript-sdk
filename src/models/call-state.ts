import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Number of calls made in each state. */
export type CallState = {
  /** Number of completed calls */
  completed?: number;
  /** Number of failed calls */
  fail?: number;
  /** Number of busy calls */
  busy?: number;
  /** Number of no-answer calls */
  noanswer?: number;
  /** Number of canceled calls */
  canceled?: number;
};

export const callStateSchema: Schema<CallState> = s.object<CallState>({
  completed: s.optional(s.int()),
  fail: s.optional(s.int()),
  busy: s.optional(s.int()),
  noanswer: s.optional(s.int()),
  canceled: s.optional(s.int()),
});
