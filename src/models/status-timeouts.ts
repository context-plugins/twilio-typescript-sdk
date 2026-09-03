import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StatusTimeouts = {
  inactive?: number;
  closed?: number;
};

export const statusTimeoutsSchema: Schema<StatusTimeouts> = s.object<StatusTimeouts>({
  inactive: s.optional(s.number()),
  closed: s.optional(s.number()),
});
