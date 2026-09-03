import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { flexV1InsightsSegmentsSchema, type FlexV1InsightsSegments } from "./flex-v1-insights-segments.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListInsightsSegmentsResponse = {
  segments?: FlexV1InsightsSegments[];
  meta?: Meta;
};

export const listInsightsSegmentsResponseSchema: Schema<ListInsightsSegmentsResponse> =
  s.object<ListInsightsSegmentsResponse>({
    segments: s.optional(s.array(s.lazy(() => flexV1InsightsSegmentsSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
