import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  flexV1InsightsQuestionnairesCategorySchema,
  type FlexV1InsightsQuestionnairesCategory,
} from "./flex-v1-insights-questionnaires-category.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListInsightsQuestionnairesCategoryResponse = {
  categories?: FlexV1InsightsQuestionnairesCategory[];
  meta?: Meta;
};

export const listInsightsQuestionnairesCategoryResponseSchema: Schema<ListInsightsQuestionnairesCategoryResponse> =
  s.object<ListInsightsQuestionnairesCategoryResponse>({
    categories: s.optional(s.array(s.lazy(() => flexV1InsightsQuestionnairesCategorySchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
