import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cubeSchema, type Cube } from "./cube.js";

export type InsightsMetadataResponse = {
  domain?: string;
  cubes?: Cube[];
};

export const insightsMetadataResponseSchema: Schema<InsightsMetadataResponse> =
  s.object<InsightsMetadataResponse>({
    domain: s.optional(s.string()),
    cubes: s.optional(s.array(s.lazy(() => cubeSchema))),
  });
