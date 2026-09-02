import { s, type Schema } from "../core/index.js";
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
