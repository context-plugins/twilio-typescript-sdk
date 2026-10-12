import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Meta = {
  firstPageUrl?: string;
  key?: string;
  nextPageUrl?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUrl?: string | null;
  url?: string;
};

export const metaSchema: Schema<Meta> = s.object<Meta>({
  firstPageUrl: s.optional(s.string()),
  key: s.optional(s.string()),
  nextPageUrl: s.optionalNullable(s.string()),
  page: s.optional(s.int()),
  pageSize: s.optional(s.int()),
  previousPageUrl: s.optionalNullable(s.string()),
  url: s.optional(s.string()),
  _keysMap: {
    firstPageUrl: "first_page_url",
    nextPageUrl: "next_page_url",
    pageSize: "page_size",
    previousPageUrl: "previous_page_url",
  },
});
