import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import { syncV1ServiceDocumentSchema, type SyncV1ServiceDocument } from "./sync-v1-service-document.js";

export type ListDocumentResponse = {
  documents?: SyncV1ServiceDocument[];
  meta?: Meta;
};

export const listDocumentResponseSchema: Schema<ListDocumentResponse> = s.object<ListDocumentResponse>({
  documents: s.optional(s.array(s.lazy(() => syncV1ServiceDocumentSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
