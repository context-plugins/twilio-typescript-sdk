import { s, type Schema } from "../core/index.js";
import {
  apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMappingSchema,
  type ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping,
} from "./api-v2010-account-sip-sip-domain-sip-auth-sip-auth-calls-sip-auth-calls-credential-list-mapping.js";

export type ListSipAuthCallsCredentialListMappingResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  contents?: ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping[];
};

export const listSipAuthCallsCredentialListMappingResponseSchema: Schema<ListSipAuthCallsCredentialListMappingResponse> =
  s.object<ListSipAuthCallsCredentialListMappingResponse>({
    end: s.optional(s.number()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.number()),
    pageSize: s.optional(s.number()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.number()),
    uri: s.optional(s.string()),
    contents: s.optional(
      s.array(
        s.lazy(() => apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMappingSchema),
      ),
    ),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
    },
  });
