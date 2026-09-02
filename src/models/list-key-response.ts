import { s, type Schema } from "../core/index.js";
import { apiV2010AccountKeySchema, type ApiV2010AccountKey } from "./api-v2010-account-key.js";

export type ListKeyResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  keys?: ApiV2010AccountKey[];
};

export const listKeyResponseSchema: Schema<ListKeyResponse> = s.object<ListKeyResponse>({
  end: s.optional(s.number()),
  firstPageUri: s.optional(s.string()),
  nextPageUri: s.optionalNullable(s.string()),
  page: s.optional(s.number()),
  pageSize: s.optional(s.number()),
  previousPageUri: s.optionalNullable(s.string()),
  start: s.optional(s.number()),
  uri: s.optional(s.string()),
  keys: s.optional(s.array(s.lazy(() => apiV2010AccountKeySchema))),
  _keysMap: {
    firstPageUri: "first_page_uri",
    nextPageUri: "next_page_uri",
    pageSize: "page_size",
    previousPageUri: "previous_page_uri",
  },
});
