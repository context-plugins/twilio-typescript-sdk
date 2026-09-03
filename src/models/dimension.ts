import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Dimension = {
  name: string;
  description?: string;
  type: string;
};

export const dimensionSchema: Schema<Dimension> = s.object<Dimension>({
  name: s.string(),
  description: s.optional(s.string()),
  type: s.string(),
});
