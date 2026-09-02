import { s, type Schema } from "../core/index.js";

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
