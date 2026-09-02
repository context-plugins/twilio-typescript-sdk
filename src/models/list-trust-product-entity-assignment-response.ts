import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  trusthubV1TrustProductTrustProductEntityAssignmentSchema,
  type TrusthubV1TrustProductTrustProductEntityAssignment,
} from "./trusthub-v1-trust-product-trust-product-entity-assignment.js";

export type ListTrustProductEntityAssignmentResponse = {
  results?: TrusthubV1TrustProductTrustProductEntityAssignment[];
  meta?: Meta;
};

export const listTrustProductEntityAssignmentResponseSchema: Schema<ListTrustProductEntityAssignmentResponse> =
  s.object<ListTrustProductEntityAssignmentResponse>({
    results: s.optional(s.array(s.lazy(() => trusthubV1TrustProductTrustProductEntityAssignmentSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
