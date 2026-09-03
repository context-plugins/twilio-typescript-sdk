import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Rule = {
  type?: string;
  all?: boolean;
  publisher?: string;
  track?: string;
  kind?: string;
  priority?: string;
};

export const ruleSchema: Schema<Rule> = s.object<Rule>({
  type: s.optional(s.string()),
  all: s.optional(s.boolean()),
  publisher: s.optional(s.string()),
  track: s.optional(s.string()),
  kind: s.optional(s.string()),
  priority: s.optional(s.string()),
});
