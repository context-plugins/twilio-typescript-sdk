import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV2010AccountSipSipCredentialListSchema,
  type ApiV2010AccountSipSipCredentialList,
} from "./api-v2010-account-sip-sip-credential-list.js";

export type ListSipCredentialListResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  credentialLists?: ApiV2010AccountSipSipCredentialList[];
};

export const listSipCredentialListResponseSchema: Schema<ListSipCredentialListResponse> =
  s.object<ListSipCredentialListResponse>({
    end: s.optional(s.number()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.number()),
    pageSize: s.optional(s.number()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.number()),
    uri: s.optional(s.string()),
    credentialLists: s.optional(s.array(s.lazy(() => apiV2010AccountSipSipCredentialListSchema))),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
      credentialLists: "credential_lists",
    },
  });
