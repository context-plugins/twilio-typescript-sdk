import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Dimension = {
  /** Identifier used to reference this dimension in queries */
  name: string;
  /** Detailed explanation of what this dimension represents */
  description?: string;
  /** Data type of the dimension (e.g., string, number, boolean, date) */
  type: string;
};

export const dimensionSchema: Schema<Dimension> = s.object<Dimension>({
  name: s.string(),
  description: s.optional(s.string()),
  type: s.string(),
});
