import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  flexV1InsightsAssessmentsCommentSchema,
  type FlexV1InsightsAssessmentsComment,
} from "./flex-v1-insights-assessments-comment.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListInsightsAssessmentsCommentResponse = {
  comments?: FlexV1InsightsAssessmentsComment[];
  meta?: Meta;
};

export const listInsightsAssessmentsCommentResponseSchema: Schema<ListInsightsAssessmentsCommentResponse> =
  s.object<ListInsightsAssessmentsCommentResponse>({
    comments: s.optional(s.array(s.lazy(() => flexV1InsightsAssessmentsCommentSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
