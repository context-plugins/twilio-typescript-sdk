import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV2010AccountSipSipDomainSchema,
  type ApiV2010AccountSipSipDomain,
} from "./api-v2010-account-sip-sip-domain.js";

export type ListSipDomainResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  domains?: ApiV2010AccountSipSipDomain[];
};

export const listSipDomainResponseSchema: Schema<ListSipDomainResponse> = s.object<ListSipDomainResponse>({
  end: s.optional(s.number()),
  firstPageUri: s.optional(s.string()),
  nextPageUri: s.optionalNullable(s.string()),
  page: s.optional(s.number()),
  pageSize: s.optional(s.number()),
  previousPageUri: s.optionalNullable(s.string()),
  start: s.optional(s.number()),
  uri: s.optional(s.string()),
  domains: s.optional(s.array(s.lazy(() => apiV2010AccountSipSipDomainSchema))),
  _keysMap: {
    firstPageUri: "first_page_uri",
    nextPageUri: "next_page_uri",
    pageSize: "page_size",
    previousPageUri: "previous_page_uri",
  },
});
