import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { trusthubV1TrustProductSchema, type TrusthubV1TrustProduct } from "./trusthub-v1-trust-product.js";

export type ListTrustProductResponse = {
  results?: TrusthubV1TrustProduct[];
  meta?: Meta;
};

export const listTrustProductResponseSchema: Schema<ListTrustProductResponse> =
  s.object<ListTrustProductResponse>({
    results: s.optional(s.array(s.lazy(() => trusthubV1TrustProductSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
