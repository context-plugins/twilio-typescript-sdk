import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CallStatePercentage1 = {
  completed?: number;
  fail?: number;
  busy?: number;
  noanswer?: number;
  canceled?: number;
};

export const callStatePercentage1Schema: Schema<CallStatePercentage1> = s.object<CallStatePercentage1>({
  completed: s.optional(s.number()),
  fail: s.optional(s.number()),
  busy: s.optional(s.number()),
  noanswer: s.optional(s.number()),
  canceled: s.optional(s.number()),
});
