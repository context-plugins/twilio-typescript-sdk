import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  numbersV2RegulatoryComplianceSupportingDocumentTypeSchema,
  type NumbersV2RegulatoryComplianceSupportingDocumentType,
} from "./numbers-v2-regulatory-compliance-supporting-document-type.js";

export type ListSupportingDocumentTypeResponse = {
  supportingDocumentTypes?: NumbersV2RegulatoryComplianceSupportingDocumentType[];
  meta?: Meta;
};

export const listSupportingDocumentTypeResponseSchema: Schema<ListSupportingDocumentTypeResponse> =
  s.object<ListSupportingDocumentTypeResponse>({
    supportingDocumentTypes: s.optional(
      s.array(s.lazy(() => numbersV2RegulatoryComplianceSupportingDocumentTypeSchema)),
    ),
    meta: s.optional(s.lazy(() => metaSchema)),
    _keysMap: {
      supportingDocumentTypes: "supporting_document_types",
    },
  });
