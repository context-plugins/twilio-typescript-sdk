import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cubeSchema, type Cube } from "./cube.js";

/** Response containing metadata about available cubes, measures, and dimensions for a domain */
export type InsightsMetadataResponse = {
  /** The business domain name for which metadata is being provided */
  domain?: string;
  /** List of data cubes available in the domain, each containing measures and dimensions */
  cubes?: Cube[];
};

export const insightsMetadataResponseSchema: Schema<InsightsMetadataResponse> =
  s.object<InsightsMetadataResponse>({
    domain: s.optional(s.string()),
    cubes: s.optional(s.array(s.lazy(() => cubeSchema))),
  });
