import { s, type Schema } from "../core/index.js";
import { apiV2010AccountAddressSchema, type ApiV2010AccountAddress } from "./api-v2010-account-address.js";

export type ListAddressResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  addresses?: ApiV2010AccountAddress[];
};

export const listAddressResponseSchema: Schema<ListAddressResponse> = s.object<ListAddressResponse>({
  end: s.optional(s.number()),
  firstPageUri: s.optional(s.string()),
  nextPageUri: s.optionalNullable(s.string()),
  page: s.optional(s.number()),
  pageSize: s.optional(s.number()),
  previousPageUri: s.optionalNullable(s.string()),
  start: s.optional(s.number()),
  uri: s.optional(s.string()),
  addresses: s.optional(s.array(s.lazy(() => apiV2010AccountAddressSchema))),
  _keysMap: {
    firstPageUri: "first_page_uri",
    nextPageUri: "next_page_uri",
    pageSize: "page_size",
    previousPageUri: "previous_page_uri",
  },
});
