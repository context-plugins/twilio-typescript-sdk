import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  flexV1InsightsAssessmentsSchema,
  type FlexV1InsightsAssessments,
} from "./flex-v1-insights-assessments.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListInsightsAssessmentsResponse = {
  assessments?: FlexV1InsightsAssessments[];
  meta?: Meta;
};

export const listInsightsAssessmentsResponseSchema: Schema<ListInsightsAssessmentsResponse> =
  s.object<ListInsightsAssessmentsResponse>({
    assessments: s.optional(s.array(s.lazy(() => flexV1InsightsAssessmentsSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
