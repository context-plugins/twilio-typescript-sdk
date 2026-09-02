import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  numbersV2RegulatoryComplianceBundleEvaluationSchema,
  type NumbersV2RegulatoryComplianceBundleEvaluation,
} from "./numbers-v2-regulatory-compliance-bundle-evaluation.js";

export type ListEvaluationResponse = {
  results?: NumbersV2RegulatoryComplianceBundleEvaluation[];
  meta?: Meta;
};

export const listEvaluationResponseSchema: Schema<ListEvaluationResponse> = s.object<ListEvaluationResponse>({
  results: s.optional(s.array(s.lazy(() => numbersV2RegulatoryComplianceBundleEvaluationSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
