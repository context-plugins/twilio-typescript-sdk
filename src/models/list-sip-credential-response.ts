import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV2010AccountSipSipCredentialListSipCredentialSchema,
  type ApiV2010AccountSipSipCredentialListSipCredential,
} from "./api-v2010-account-sip-sip-credential-list-sip-credential.js";

export type ListSipCredentialResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  credentials?: ApiV2010AccountSipSipCredentialListSipCredential[];
};

export const listSipCredentialResponseSchema: Schema<ListSipCredentialResponse> =
  s.object<ListSipCredentialResponse>({
    end: s.optional(s.int()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.int()),
    pageSize: s.optional(s.int()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.int()),
    uri: s.optional(s.string()),
    credentials: s.optional(s.array(s.lazy(() => apiV2010AccountSipSipCredentialListSipCredentialSchema))),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
    },
  });
