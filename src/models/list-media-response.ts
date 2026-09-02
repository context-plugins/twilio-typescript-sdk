import { s, type Schema } from "../core/index.js";
import {
  apiV2010AccountMessageMediaSchema,
  type ApiV2010AccountMessageMedia,
} from "./api-v2010-account-message-media.js";

export type ListMediaResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  mediaList?: ApiV2010AccountMessageMedia[];
};

export const listMediaResponseSchema: Schema<ListMediaResponse> = s.object<ListMediaResponse>({
  end: s.optional(s.number()),
  firstPageUri: s.optional(s.string()),
  nextPageUri: s.optionalNullable(s.string()),
  page: s.optional(s.number()),
  pageSize: s.optional(s.number()),
  previousPageUri: s.optionalNullable(s.string()),
  start: s.optional(s.number()),
  uri: s.optional(s.string()),
  mediaList: s.optional(s.array(s.lazy(() => apiV2010AccountMessageMediaSchema))),
  _keysMap: {
    firstPageUri: "first_page_uri",
    nextPageUri: "next_page_uri",
    pageSize: "page_size",
    previousPageUri: "previous_page_uri",
    mediaList: "media_list",
  },
});
