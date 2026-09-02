import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  trusthubV1SupportingDocumentSchema,
  type TrusthubV1SupportingDocument,
} from "./trusthub-v1-supporting-document.js";

export type ListSupportingDocumentResponse1 = {
  results?: TrusthubV1SupportingDocument[];
  meta?: Meta;
};

export const listSupportingDocumentResponse1Schema: Schema<ListSupportingDocumentResponse1> =
  s.object<ListSupportingDocumentResponse1>({
    results: s.optional(s.array(s.lazy(() => trusthubV1SupportingDocumentSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
