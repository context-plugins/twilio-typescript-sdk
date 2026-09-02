import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  trusthubV1CustomerProfileCustomerProfileEvaluationSchema,
  type TrusthubV1CustomerProfileCustomerProfileEvaluation,
} from "./trusthub-v1-customer-profile-customer-profile-evaluation.js";

export type ListCustomerProfileEvaluationResponse = {
  results?: TrusthubV1CustomerProfileCustomerProfileEvaluation[];
  meta?: Meta;
};

export const listCustomerProfileEvaluationResponseSchema: Schema<ListCustomerProfileEvaluationResponse> =
  s.object<ListCustomerProfileEvaluationResponse>({
    results: s.optional(s.array(s.lazy(() => trusthubV1CustomerProfileCustomerProfileEvaluationSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
