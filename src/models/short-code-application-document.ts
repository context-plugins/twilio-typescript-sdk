import { s, type Schema } from "../core/index.js";
import { documentTypeSchema, type DocumentType } from "./document-type.js";

export type ShortCodeApplicationDocument = {
  sid?: string;
  documentType?: DocumentType;
  friendlyName?: string;
};

export const shortCodeApplicationDocumentSchema: Schema<ShortCodeApplicationDocument> =
  s.object<ShortCodeApplicationDocument>({
    sid: s.optional(s.string()),
    documentType: s.optional(s.lazy(() => documentTypeSchema)),
    friendlyName: s.optional(s.string()),
    _keysMap: {
      documentType: "document_type",
      friendlyName: "friendly_name",
    },
  });
