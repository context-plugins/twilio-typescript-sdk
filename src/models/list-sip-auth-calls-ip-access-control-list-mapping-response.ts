import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sipAuthCallsIpAccessControlListMappingSchema,
  type SipAuthCallsIpAccessControlListMapping,
} from "./sip-auth-calls-ip-access-control-list-mapping.js";

export type ListSipAuthCallsIpAccessControlListMappingResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  contents?: SipAuthCallsIpAccessControlListMapping[];
};

export const listSipAuthCallsIpAccessControlListMappingResponseSchema: Schema<ListSipAuthCallsIpAccessControlListMappingResponse> =
  s.object<ListSipAuthCallsIpAccessControlListMappingResponse>({
    end: s.optional(s.number()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.number()),
    pageSize: s.optional(s.number()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.number()),
    uri: s.optional(s.string()),
    contents: s.optional(s.array(s.lazy(() => sipAuthCallsIpAccessControlListMappingSchema))),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
    },
  });
