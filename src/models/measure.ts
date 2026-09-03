import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Measure = {
  name: string;
  description?: string;
  type: string;
  aggregation?: string;
};

export const measureSchema: Schema<Measure> = s.object<Measure>({
  name: s.string(),
  description: s.optional(s.string()),
  type: s.string(),
  aggregation: s.optional(s.string()),
});
