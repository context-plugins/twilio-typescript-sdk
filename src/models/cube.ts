import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dimensionSchema, type Dimension } from "./dimension.js";
import { measureSchema, type Measure } from "./measure.js";

export type Cube = {
  name: string;
  description?: string;
  measures: Measure[];
  dimensions: Dimension[];
};

export const cubeSchema: Schema<Cube> = s.object<Cube>({
  name: s.string(),
  description: s.optional(s.string()),
  measures: s.array(s.lazy(() => measureSchema)),
  dimensions: s.array(s.lazy(() => dimensionSchema)),
});
