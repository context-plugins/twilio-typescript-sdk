import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  numbersV2AuthorizationDocumentSchema,
  type NumbersV2AuthorizationDocument,
} from "./numbers-v2-authorization-document.js";

export type ListAuthorizationDocumentResponse = {
  items?: NumbersV2AuthorizationDocument[];
  meta?: Meta;
};

export const listAuthorizationDocumentResponseSchema: Schema<ListAuthorizationDocumentResponse> =
  s.object<ListAuthorizationDocumentResponse>({
    items: s.optional(s.array(s.lazy(() => numbersV2AuthorizationDocumentSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
