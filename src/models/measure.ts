import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Measure = {
  /** Identifier used to reference this measure in queries */
  name: string;
  /** Detailed explanation of what this measure represents */
  description?: string;
  /** Type of the measure */
  type: string;
  /** Aggregation type for the measure (e.g., sum, count, average) */
  aggregation?: string;
};

export const measureSchema: Schema<Measure> = s.object<Measure>({
  name: s.string(),
  description: s.optional(s.string()),
  type: s.string(),
  aggregation: s.optional(s.string()),
});
