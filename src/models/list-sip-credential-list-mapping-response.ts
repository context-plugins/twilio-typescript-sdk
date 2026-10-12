import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV2010AccountSipSipDomainSipCredentialListMappingSchema,
  type ApiV2010AccountSipSipDomainSipCredentialListMapping,
} from "./api-v2010-account-sip-sip-domain-sip-credential-list-mapping.js";

export type ListSipCredentialListMappingResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  credentialListMappings?: ApiV2010AccountSipSipDomainSipCredentialListMapping[];
};

export const listSipCredentialListMappingResponseSchema: Schema<ListSipCredentialListMappingResponse> =
  s.object<ListSipCredentialListMappingResponse>({
    end: s.optional(s.int()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.int()),
    pageSize: s.optional(s.int()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.int()),
    uri: s.optional(s.string()),
    credentialListMappings: s.optional(
      s.array(s.lazy(() => apiV2010AccountSipSipDomainSipCredentialListMappingSchema)),
    ),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
      credentialListMappings: "credential_list_mappings",
    },
  });
