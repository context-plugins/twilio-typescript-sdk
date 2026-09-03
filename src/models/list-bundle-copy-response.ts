import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  numbersV2RegulatoryComplianceBundleBundleCopySchema,
  type NumbersV2RegulatoryComplianceBundleBundleCopy,
} from "./numbers-v2-regulatory-compliance-bundle-bundle-copy.js";

export type ListBundleCopyResponse = {
  results?: NumbersV2RegulatoryComplianceBundleBundleCopy[];
  meta?: Meta;
};

export const listBundleCopyResponseSchema: Schema<ListBundleCopyResponse> = s.object<ListBundleCopyResponse>({
  results: s.optional(s.array(s.lazy(() => numbersV2RegulatoryComplianceBundleBundleCopySchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
