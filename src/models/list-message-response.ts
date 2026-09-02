import { s, type Schema } from "../core/index.js";
import { apiV2010AccountMessageSchema, type ApiV2010AccountMessage } from "./api-v2010-account-message.js";

export type ListMessageResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  messages?: ApiV2010AccountMessage[];
};

export const listMessageResponseSchema: Schema<ListMessageResponse> = s.object<ListMessageResponse>({
  end: s.optional(s.number()),
  firstPageUri: s.optional(s.string()),
  nextPageUri: s.optionalNullable(s.string()),
  page: s.optional(s.number()),
  pageSize: s.optional(s.number()),
  previousPageUri: s.optionalNullable(s.string()),
  start: s.optional(s.number()),
  uri: s.optional(s.string()),
  messages: s.optional(s.array(s.lazy(() => apiV2010AccountMessageSchema))),
  _keysMap: {
    firstPageUri: "first_page_uri",
    nextPageUri: "next_page_uri",
    pageSize: "page_size",
    previousPageUri: "previous_page_uri",
  },
});
