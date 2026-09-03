import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CallState = {
  completed?: number;
  fail?: number;
  busy?: number;
  noanswer?: number;
  canceled?: number;
};

export const callStateSchema: Schema<CallState> = s.object<CallState>({
  completed: s.optional(s.number()),
  fail: s.optional(s.number()),
  busy: s.optional(s.number()),
  noanswer: s.optional(s.number()),
  canceled: s.optional(s.number()),
});
