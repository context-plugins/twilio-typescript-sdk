import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV2010AccountShortCodeSchema,
  type ApiV2010AccountShortCode,
} from "./api-v2010-account-short-code.js";

export type ListShortCodeResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  shortCodes?: ApiV2010AccountShortCode[];
};

export const listShortCodeResponseSchema: Schema<ListShortCodeResponse> = s.object<ListShortCodeResponse>({
  end: s.optional(s.int()),
  firstPageUri: s.optional(s.string()),
  nextPageUri: s.optionalNullable(s.string()),
  page: s.optional(s.int()),
  pageSize: s.optional(s.int()),
  previousPageUri: s.optionalNullable(s.string()),
  start: s.optional(s.int()),
  uri: s.optional(s.string()),
  shortCodes: s.optional(s.array(s.lazy(() => apiV2010AccountShortCodeSchema))),
  _keysMap: {
    firstPageUri: "first_page_uri",
    nextPageUri: "next_page_uri",
    pageSize: "page_size",
    previousPageUri: "previous_page_uri",
    shortCodes: "short_codes",
  },
});
