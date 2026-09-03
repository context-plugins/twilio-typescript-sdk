import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  trusthubV1TrustProductTrustProductEvaluationSchema,
  type TrusthubV1TrustProductTrustProductEvaluation,
} from "./trusthub-v1-trust-product-trust-product-evaluation.js";

export type ListTrustProductEvaluationResponse = {
  results?: TrusthubV1TrustProductTrustProductEvaluation[];
  meta?: Meta;
};

export const listTrustProductEvaluationResponseSchema: Schema<ListTrustProductEvaluationResponse> =
  s.object<ListTrustProductEvaluationResponse>({
    results: s.optional(s.array(s.lazy(() => trusthubV1TrustProductTrustProductEvaluationSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
