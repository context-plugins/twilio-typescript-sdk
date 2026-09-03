import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Rule1 = {
  type?: string;
  all?: boolean;
  publisher?: string;
  track?: string;
  kind?: string;
};

export const rule1Schema: Schema<Rule1> = s.object<Rule1>({
  type: s.optional(s.string()),
  all: s.optional(s.boolean()),
  publisher: s.optional(s.string()),
  track: s.optional(s.string()),
  kind: s.optional(s.string()),
});
