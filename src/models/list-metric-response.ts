import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { insightsV1CallMetricSchema, type InsightsV1CallMetric } from "./insights-v1-call-metric.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListMetricResponse = {
  metrics?: InsightsV1CallMetric[];
  meta?: Meta;
};

export const listMetricResponseSchema: Schema<ListMetricResponse> = s.object<ListMetricResponse>({
  metrics: s.optional(s.array(s.lazy(() => insightsV1CallMetricSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
