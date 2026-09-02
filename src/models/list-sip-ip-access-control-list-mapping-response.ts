import { s, type Schema } from "../core/index.js";
import {
  apiV2010AccountSipSipDomainSipIpAccessControlListMappingSchema,
  type ApiV2010AccountSipSipDomainSipIpAccessControlListMapping,
} from "./api-v2010-account-sip-sip-domain-sip-ip-access-control-list-mapping.js";

export type ListSipIpAccessControlListMappingResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  ipAccessControlListMappings?: ApiV2010AccountSipSipDomainSipIpAccessControlListMapping[];
};

export const listSipIpAccessControlListMappingResponseSchema: Schema<ListSipIpAccessControlListMappingResponse> =
  s.object<ListSipIpAccessControlListMappingResponse>({
    end: s.optional(s.number()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.number()),
    pageSize: s.optional(s.number()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.number()),
    uri: s.optional(s.string()),
    ipAccessControlListMappings: s.optional(
      s.array(s.lazy(() => apiV2010AccountSipSipDomainSipIpAccessControlListMappingSchema)),
    ),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
      ipAccessControlListMappings: "ip_access_control_list_mappings",
    },
  });
