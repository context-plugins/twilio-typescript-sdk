import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  numbersV2RegulatoryComplianceSupportingDocumentSchema,
  type NumbersV2RegulatoryComplianceSupportingDocument,
} from "./numbers-v2-regulatory-compliance-supporting-document.js";

export type ListSupportingDocumentResponse = {
  results?: NumbersV2RegulatoryComplianceSupportingDocument[];
  meta?: Meta;
};

export const listSupportingDocumentResponseSchema: Schema<ListSupportingDocumentResponse> =
  s.object<ListSupportingDocumentResponse>({
    results: s.optional(s.array(s.lazy(() => numbersV2RegulatoryComplianceSupportingDocumentSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
