import { s, type Schema } from "../core/index.js";
import {
  apiV2010AccountSipSipIpAccessControlListSchema,
  type ApiV2010AccountSipSipIpAccessControlList,
} from "./api-v2010-account-sip-sip-ip-access-control-list.js";

export type ListSipIpAccessControlListResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  ipAccessControlLists?: ApiV2010AccountSipSipIpAccessControlList[];
};

export const listSipIpAccessControlListResponseSchema: Schema<ListSipIpAccessControlListResponse> =
  s.object<ListSipIpAccessControlListResponse>({
    end: s.optional(s.number()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.number()),
    pageSize: s.optional(s.number()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.number()),
    uri: s.optional(s.string()),
    ipAccessControlLists: s.optional(s.array(s.lazy(() => apiV2010AccountSipSipIpAccessControlListSchema))),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
      ipAccessControlLists: "ip_access_control_lists",
    },
  });
