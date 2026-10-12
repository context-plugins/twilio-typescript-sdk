import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StatusTimeouts1 = {
  inactive?: number;
  closed?: number;
};

export const statusTimeouts1Schema: Schema<StatusTimeouts1> = s.object<StatusTimeouts1>({
  inactive: s.optional(s.int()),
  closed: s.optional(s.int()),
});
