import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  flexV1InsightsQuestionnairesSchema,
  type FlexV1InsightsQuestionnaires,
} from "./flex-v1-insights-questionnaires.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListInsightsQuestionnairesResponse = {
  questionnaires?: FlexV1InsightsQuestionnaires[];
  meta?: Meta;
};

export const listInsightsQuestionnairesResponseSchema: Schema<ListInsightsQuestionnairesResponse> =
  s.object<ListInsightsQuestionnairesResponse>({
    questionnaires: s.optional(s.array(s.lazy(() => flexV1InsightsQuestionnairesSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
