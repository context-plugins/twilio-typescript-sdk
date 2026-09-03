import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  numbersV2RegulatoryComplianceBundleSchema,
  type NumbersV2RegulatoryComplianceBundle,
} from "./numbers-v2-regulatory-compliance-bundle.js";

export type ListBundleResponse = {
  results?: NumbersV2RegulatoryComplianceBundle[];
  meta?: Meta;
};

export const listBundleResponseSchema: Schema<ListBundleResponse> = s.object<ListBundleResponse>({
  results: s.optional(s.array(s.lazy(() => numbersV2RegulatoryComplianceBundleSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
