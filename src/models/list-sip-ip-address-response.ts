import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV2010AccountSipSipIpAccessControlListSipIpAddressSchema,
  type ApiV2010AccountSipSipIpAccessControlListSipIpAddress,
} from "./api-v2010-account-sip-sip-ip-access-control-list-sip-ip-address.js";

export type ListSipIpAddressResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  ipAddresses?: ApiV2010AccountSipSipIpAccessControlListSipIpAddress[];
};

export const listSipIpAddressResponseSchema: Schema<ListSipIpAddressResponse> =
  s.object<ListSipIpAddressResponse>({
    end: s.optional(s.number()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.number()),
    pageSize: s.optional(s.number()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.number()),
    uri: s.optional(s.string()),
    ipAddresses: s.optional(
      s.array(s.lazy(() => apiV2010AccountSipSipIpAccessControlListSipIpAddressSchema)),
    ),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
      ipAddresses: "ip_addresses",
    },
  });
