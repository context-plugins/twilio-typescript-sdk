import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { trusthubV1PoliciesSchema, type TrusthubV1Policies } from "./trusthub-v1-policies.js";

export type ListPoliciesResponse = {
  results?: TrusthubV1Policies[];
  meta?: Meta;
};

export const listPoliciesResponseSchema: Schema<ListPoliciesResponse> = s.object<ListPoliciesResponse>({
  results: s.optional(s.array(s.lazy(() => trusthubV1PoliciesSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
