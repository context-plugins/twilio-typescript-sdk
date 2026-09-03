import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CallStatePercentage = {
  completed?: number;
  fail?: number;
  busy?: number;
  noanswer?: number;
  canceled?: number;
};

export const callStatePercentageSchema: Schema<CallStatePercentage> = s.object<CallStatePercentage>({
  completed: s.optional(s.number()),
  fail: s.optional(s.number()),
  busy: s.optional(s.number()),
  noanswer: s.optional(s.number()),
  canceled: s.optional(s.number()),
});
