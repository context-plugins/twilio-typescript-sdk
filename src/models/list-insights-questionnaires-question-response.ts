import { s, type Schema } from "../core/index.js";
import {
  flexV1InsightsQuestionnairesQuestionSchema,
  type FlexV1InsightsQuestionnairesQuestion,
} from "./flex-v1-insights-questionnaires-question.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListInsightsQuestionnairesQuestionResponse = {
  questions?: FlexV1InsightsQuestionnairesQuestion[];
  meta?: Meta;
};

export const listInsightsQuestionnairesQuestionResponseSchema: Schema<ListInsightsQuestionnairesQuestionResponse> =
  s.object<ListInsightsQuestionnairesQuestionResponse>({
    questions: s.optional(s.array(s.lazy(() => flexV1InsightsQuestionnairesQuestionSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
