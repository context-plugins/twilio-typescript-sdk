import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dimensionSchema, type Dimension } from "./dimension.js";
import { measureSchema, type Measure } from "./measure.js";

export type Cube = {
  /** Name of the cube, used as a reference in queries */
  name: string;
  /** Human-readable description of what the cube represents */
  description?: string;
  /**
   * List of measures available in the cube, representing quantitative values that can be aggregated
   */
  measures: Measure[];
  /**
   * List of dimensions available in the cube, representing categorical attributes for grouping data
   */
  dimensions: Dimension[];
};

export const cubeSchema: Schema<Cube> = s.object<Cube>({
  name: s.string(),
  description: s.optional(s.string()),
  measures: s.array(s.lazy(() => measureSchema)),
  dimensions: s.array(s.lazy(() => dimensionSchema)),
});
