import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiV2010AccountCallSchema, type ApiV2010AccountCall } from "./api-v2010-account-call.js";

export type ListCallResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  calls?: ApiV2010AccountCall[];
};

export const listCallResponseSchema: Schema<ListCallResponse> = s.object<ListCallResponse>({
  end: s.optional(s.number()),
  firstPageUri: s.optional(s.string()),
  nextPageUri: s.optionalNullable(s.string()),
  page: s.optional(s.number()),
  pageSize: s.optional(s.number()),
  previousPageUri: s.optionalNullable(s.string()),
  start: s.optional(s.number()),
  uri: s.optional(s.string()),
  calls: s.optional(s.array(s.lazy(() => apiV2010AccountCallSchema))),
  _keysMap: {
    firstPageUri: "first_page_uri",
    nextPageUri: "next_page_uri",
    pageSize: "page_size",
    previousPageUri: "previous_page_uri",
  },
});
