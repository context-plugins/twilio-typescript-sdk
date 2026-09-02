import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  numbersV2RegulatoryComplianceEndUserTypeSchema,
  type NumbersV2RegulatoryComplianceEndUserType,
} from "./numbers-v2-regulatory-compliance-end-user-type.js";

export type ListSupportingDocumentTypeResponse1 = {
  supportingDocumentTypes?: NumbersV2RegulatoryComplianceEndUserType[];
  meta?: Meta;
};

export const listSupportingDocumentTypeResponse1Schema: Schema<ListSupportingDocumentTypeResponse1> =
  s.object<ListSupportingDocumentTypeResponse1>({
    supportingDocumentTypes: s.optional(
      s.array(s.lazy(() => numbersV2RegulatoryComplianceEndUserTypeSchema)),
    ),
    meta: s.optional(s.lazy(() => metaSchema)),
    _keysMap: {
      supportingDocumentTypes: "supporting_document_types",
    },
  });
