import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentTypeSchema, type DocumentType } from "./document-type.js";

export type ShortCodeApplicationDocument = {
  /** The unique identifier of the document. */
  sid?: string;
  /** The type of document. */
  documentType?: DocumentType;
  /** The friendly name of the document. */
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
