import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
  end: s.optional(s.int()),
  firstPageUri: s.optional(s.string()),
  nextPageUri: s.optionalNullable(s.string()),
  page: s.optional(s.int()),
  pageSize: s.optional(s.int()),
  previousPageUri: s.optionalNullable(s.string()),
  start: s.optional(s.int()),
  uri: s.optional(s.string()),
  keys: s.optional(s.array(s.lazy(() => apiV2010AccountKeySchema))),
  _keysMap: {
    firstPageUri: "first_page_uri",
    nextPageUri: "next_page_uri",
    pageSize: "page_size",
    previousPageUri: "previous_page_uri",
  },
});
